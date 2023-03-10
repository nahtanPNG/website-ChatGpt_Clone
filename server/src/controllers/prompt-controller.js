const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")

module.exports ={  //Tudo que vamos exportar

    async sendText(request, response){ //capturar a requisição e a resposta

        const openaiAI = openai.configuration()
        const inputModel = new InputPrompt(request.body)

        try {
            const response = await openaiAI.createCompletion(
                openai.textCompletion(inputModel)
            )

            return response.status(200).json(
                {
                    sucess: true,
                    data: response.data.choices[0].text
                }
            )
        } catch (error) {
            
            return response.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : 'Tem erro no servidor',
        })
    }
} 
}

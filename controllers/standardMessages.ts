enum StandardErrorMessages{
    /**
     * Utilized to inform the user that an unknown error has ocurred.
     */
    UNKNOWN_ERR = "Algo deu muito errado com esse comando aqui, mas não sei dizer ao certo o quê.",
    /**
     * Utilized to inform the user that the command do not exists.
     */
    COMMAND_NOT_FOUND = "Esse comando não existe, rapaziada!",
    /**
     * Utilized to inform the user that the wrong arguments were passed with the command into the function
     */
    WRONG_ARGS_PASSED = "Você está utilizando este comando de maneira burra!",

    NOT_UNDERSTANDABLE_MESSAGE = "Sinceramente, não entendi..."
}

export {StandardErrorMessages}
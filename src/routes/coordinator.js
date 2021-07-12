export const goToLogin = (history) => {
    history.push("/")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToPostDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}
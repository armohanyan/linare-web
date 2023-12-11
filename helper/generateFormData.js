export function generateFormData(params) {
    const keys = Object.keys(params)
    const formData = new FormData();

    keys.forEach(key => {
        formData.append(key, params[key]);
    })

    return formData
}
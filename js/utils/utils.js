export const formatarDataBr = dataStr => {
    const partes = dataStr.split("-");
    if (partes.length === 3) {
        const [ano, mes, dia] = partes;
        return `${dia}/${mes}/${ano}`;
    } else {
        console.error("Formato de data inválido. Use yyyy-MM-dd.");
        return null;
    }
}

export const adicionarDias = (dataString, numeroDias) => {
    let data = new Date(dataString);
    data.setDate(data.getDate() + numeroDias + 1);
    let novaDataString = data.toISOString().split('T')[0];
    return novaDataString;
}
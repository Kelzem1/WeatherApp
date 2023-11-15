const getDayName = (dateString) =>{
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const date = new Date(dateString.replace(/-/g,'/'))
    const dayIndex = date.getDay()

    return daysOfWeek[dayIndex]


}

export default getDayName
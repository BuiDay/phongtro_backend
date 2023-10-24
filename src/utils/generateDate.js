import moment from 'moment'

const fomartDate = (TimeDay) =>{
    let day = TimeDay.getDay() === 0 ? "Chủ nhật" : `Thứ ${TimeDay.getDay() + 1}`;
    let date = `${TimeDay.getDate()}/${TimeDay.getMonth()+1}/${TimeDay.getFullYear()}`
    let time = `${TimeDay.getHours()}:${TimeDay.getMinutes()}`
    return `${day}, ${time} ${date}`
}

const generateDate = () => {
    let gapExpire = Math.floor(Math.random() * 29) + 1;
    let today = new Date();
    let expireDay = moment(today).add(gapExpire,'d').toDate()
    return{
        today:fomartDate(today),
        expireDay:fomartDate(expireDay)
    }
}

export default generateDate
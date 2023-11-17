import axios from 'axios';
class LoaiSan {
    constructor(idLoaiSan, tenLoaiSan, giaTien){
        this.IdLoaiSan = idLoaiSan;
        this.TenLoaiSan = tenLoaiSan;
        this.GiaTien = giaTien;
    }
    GetAllLoaiSan() {
        return axios.post("http://localhost:8081/getAllLoaiSan", {})
            .then(response => {
                const list = this.initLoaiSan(response.data);
                return list
            })
            .catch(error => {
                console.error(error);
            });
    }
    initLoaiSan(list){
        const resultList = [];
        list.forEach(loaisan => {
            const item = new LoaiSan(loaisan.IdLoaiSan, loaisan.TenLoaiSan, loaisan.GiaTien);
            resultList.push(item);
        });
        
        return resultList
    }
}
export default LoaiSan
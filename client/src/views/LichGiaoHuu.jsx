import axios from "axios";
import "../css/LichGiaoHuu.css"
import Swal from 'sweetalert2'
import { getAllLichGiaoHuu} from "../controllers/CQuanLyLich";
import { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";

const LichGiaoHuu = () =>{
  const conFirmClicked=()=>{
    Swal.fire({
      title: "Bạn có muốn tham gia vào trận đấu này ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý, tôi tham gia!",
      cancelButtonText:"Hủy"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:"Thành công",
          text: "Bạn có thể xem thông tin trận tại lịch sử",
          icon: "success"
        });
      }
    });
  }

 
  const [getLichs, setLichs] = useState([]);


  const GetAllLichGiaoHuu = async () =>{
    setLichs(await getAllLichGiaoHuu())
  }
  useEffect(() => {
    GetAllLichGiaoHuu()
  }, []);

  return (
    <div className="ThamGiaGiaoHU mb-[80px] mt-[120px]" >
      <div className="Topic">LỊCH GIAO HỮU</div>
      <div className="BNgLCh text-center p-3 h-[795px] bg-black"  >
        <div class="grid grid-cols-7 w-full bg-[#D4D4D4] rounded-[10px] pr-2">
            <div class="col-span-1 px-5 text-[28px] font-bold h-[60px] flex flex-col justify-center">Tên</div>
            <div class="col-span-1 px-5 text-[28px] font-bold h-[60px] flex flex-col justify-center">SĐT</div>
            <div class="col-span-2 px-5 text-[28px] font-bold h-[60px] flex flex-col justify-center">Địa điểm</div>
            <div class="col-span-1 px-5 text-[28px] font-bold h-[60px] flex flex-col justify-center">Mã sân</div>
            <div class="col-span-1 px-5 text-[28px] font-bold h-[60px] flex flex-col justify-center">Thời gian</div>
            <div class="col-span-1 px-5 text-[28px] font-bold h-[60px] flex flex-col justify-center">Xác nhận</div>
        </div>
        <div className="overflow-y-auto my-0 w-full pr-1">
    
          {getLichs.length > 0 ? getLichs.map((data,i)=>(
            <div key={i} className="mt-3 rounded-[10px] grid grid-cols-7 bg-[#379E13] w-[100%] text-center justify-center py-5 text-[#fff] text-[20px]" >
            <div className="col-span-1 px-5 flex flex-col justify-center">{data.IDNgDat}</div>
            <div class="col-span-1 px-5 flex flex-col justify-center">{data.SoDienThoai}</div>
            <div class="col-span-2 px-5 flex flex-col justify-center text-left">{data.TenCoSo}<br/>{data.DiaChiCoSo}</div>
            <div class="col-span-1 px-5 flex flex-col justify-center">{data.MaSan}</div>
            <div class="col-span-1 px-5 flex flex-col justify-center">{data.Ngay}<br/>{data.ThoiGian}</div>
            <div className="relative">
              <button class="col-span-1 px-5 bg-[#FFEB37] rounded-[15px] w-[150px] h-[60px] justify-center text-[#000] my-3 font-bold" onClick={conFirmClicked}>Tham gia</button>
            </div>
            </div>  
          )): 
          (<div>Không có trận giao hữu nào</div>)}
         
          
        </div>

        
      </div>
  </div>
  )
};

export default LichGiaoHuu;
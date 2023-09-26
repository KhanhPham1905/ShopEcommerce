
export function convertDateFormat(dateString) {
    // Tách ngày, tháng và năm từ chuỗi đầu vào
    const [day, month, year] = dateString.split('-');
  
    // Tạo chuỗi mới theo định dạng "dd/mm/yyyy"
    const newDateString = `${day}/${month}/${year}`;
  
    return newDateString;
}

export function reverseDate(dateString) {
  const dateParts = dateString.split('-');
  if (dateParts.length === 3) {
    const [day, month, year] = dateParts;
    return `${year}-${month}-${day}`;
  } else {
    // Nếu định dạng ngày không chính xác, trả về chuỗi gốc
    return dateString;
  }
}
export function calculateTaskStatus(project) {
    const currentDate = new Date();
    const startDate = new Date(project.date_start);
    const endDate = new Date(project.date_end);
    const startTime = new Date(`1970-01-01 ${project.time_in}`);
    const endTime = new Date(`1970-01-01 ${project.time_out}`);
    if (project.type === 1) {
      return "Hoàn thành";
    }else if(project.type === 0 && startTime > currentDate ){
      return "Chưa đến hạn thực hiện"
    }else if(project.type === 0 && endDate <= currentDate){
      return "Quá hạn"
    }else if(project.type === 0 && endDate >  currentDate && startTime <= currentDate){
      return "Đang thực hiện"
    }
    return "Không xác định";
  }


export function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0'); // Thêm số 0 vào đầu nếu cần
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Thêm số 0 vào đầu nếu cần

    const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;

    return formattedDate;
}

function chuyenDoiNgay(ngay) {
  var ngayThang = ngay.split('-');
  var ngayMoi = ngayThang[1] + '/' + ngayThang[0] + '/' + ngayThang[2];
  return ngayMoi;
}
export function compareDatesAndTimes(dateStart, dateEnd, timeStart, timeEnd) {
  const startDate = new Date(chuyenDoiNgay(dateStart));
  const endDate = new Date(chuyenDoiNgay(dateEnd));
  const startTime = new Date(`1970-01-01T${timeStart}:00`);
  const endTime = new Date(`1970-01-01T${timeEnd}:00`);
  if (startDate > endDate) {
    alert('Ngày bắt đầu phải trước ngày kết thúc');
    return true;
  }
  if (startDate.getTime() == endDate.getTime() && startTime >= endTime) {
    alert('Trong cùng ngày giờ bắt đầu phải trước giờ kết thúc');
    return true;
  }
  return false;
}

function convertDateFormat2(dateString) {
  const parts = dateString?.split("-");
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  return `${year}-${month}-${day}`;
}


export function fValidDate(ObjDateOne, ObjDateTwo){
  const startDateOne = new Date(`${convertDateFormat2(ObjDateOne?.date_start)}T${ObjDateOne?.time_in}:00`);
  const startDateTwo = new Date(`${convertDateFormat2(ObjDateTwo?.date_start)}T${ObjDateTwo?.time_in}:00`);
  const endDateOne = new Date(`${convertDateFormat2(ObjDateOne?.date_end)}T${ObjDateOne?.time_out}:00`);
  const endDateTwo = new Date(`${convertDateFormat2(ObjDateTwo?.date_end)}T${ObjDateTwo?.time_out}:00`);

  if (startDateOne.getTime() < startDateTwo.getTime() || endDateOne.getTime() > endDateTwo.getTime()) {
    alert(`Ngày bắt đầu và ngày kết thúc phải trong khoẳng thời gian bắt đầu và kết thúc của dự án ${ObjDateTwo?.time_in} ${ObjDateTwo?.date_start} ->${ObjDateTwo?.time_out} ${ObjDateTwo?.date_end}`);
    return true;
  }

  if(startDateOne.getTime() == startDateTwo.getTime() || endDateOne.getTime() == endDateTwo.getTime()){
    alert(`Trong cùng ngày giờ bắt đầu phải trước giờ kết thúc`)
    return true;
  }
  return false;
}
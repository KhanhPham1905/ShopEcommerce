import React, { useState } from 'react';
import Image from 'next/image';



import * as XLSX from 'xlsx';

export default function Excel() {


    const [data, setData] = useState([
        ['STT', 'Tên cuộc họp', 'Nội dung cuộc họp', 'Thời gian bắt đầu',
            'Thời lượng', 'Địa điểm', 'Bộ phận tham gia',
            'Chủ trì cuộc họp', 'Thư ký cuộc họp'],



        ['John', '30', 'New York'],
        ['Jane', '25', 'Los Angeles'],
        ['Doe', '40', 'Chicago']
    ]);


    const exportToExcel = (data: any[][], filename: string) => {
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, filename);
    };

    return (
        <div>

            <p
                onClick={() => exportToExcel(data, 'meeting_data.xlsx')}
                style={{ margin: "0" }}
            >
                <Image width={16} height={19} alt='' src="/export_ex.png" style={{ marginRight: "10px" }} />
                Xuất thông tin ra excel
            </p>

        </div>
    );
}

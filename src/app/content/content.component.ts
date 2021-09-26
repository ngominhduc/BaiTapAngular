import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  headers = ["STT", "Tên cáo báo", "Thời gian", "Thời gian tạo", "Thời gian cập nhật", "Site gửi", "Site nhận", "Trạng thái", "File đính kèm"];

  data = [
    {
      "STT": "1",
      "tenbaocao": " site 5 gửi site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "Đã truy cập file",
      "filedinhkem": "file-sample_1MB (2).docx"
    },
    {
      "STT": "2",
      "tenbaocao": "site 1 gửi site 5",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:50:39 23/09/2021",
      "thoigiancapnhat": "23:50:43 23/09/2021",
      "sitegui": "site 1",
      "sitenhan": "site 5",
      "trangthai": "Đã nhận",
      "filedinhkem": "file-sample_1MB(2).docx"
    },
    {
      "STT": "3",
      "tenbaocao": " site 5 gui site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "da truy cap ",
      "filedinhkem": "file-sample_1MB%20(2).docx"
    }, {
      "STT": "4",
      "tenbaocao": " site 5 gui site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "da truy cap ",
      "filedinhkem": "TLNV_LMS.docx"
    },
    {
      "STT": "5",
      "tenbaocao": " site 5 gui site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "da truy cap ",
      "filedinhkem": "file-sample_1MB%20(2).docx"
    }, {
      "STT": "6",
      "tenbaocao": " site 5 gui site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "da truy cap ",
      "filedinhkem": "file-sample_1MB.docx"
    }, {
      "STT": "7",
      "tenbaocao": " site 5 gui site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "da truy cap ",
      "filedinhkem": "TLNV_LMS.docx"
    }, {
      "STT": "8",
      "tenbaocao": " site 5 gui site 1",
      "thoigian": "23/09/2021",
      "thoigiantao": "23:51:20 23/09/2021",
      "thoigiancapnhat": "23:51:31 23/09/2021",
      "sitegui": "site 5",
      "sitenhan": "site 1",
      "trangthai": "da truy cap ",
      "filedinhkem": "TLNV_LMS.docx"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

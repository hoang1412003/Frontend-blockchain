import React from 'react';
import './Page1.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

class Page1 extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <h1>Cần chuẩn bị trước và kiên trì đối mặt với mùa Đông</h1>
          <p>Từ nhỏ, Mã Vân đã là một học sinh có năng lực yếu, đặc biệt là môn Toán. Anh gần như phải rất vất vả mới có thể hoàn thành 3 cấp học phổ thông. Nhưng đại học gần như là chuyện quá xa vời với cậu, ngay cả gia đình cũng không trông đợi gì.</p>
          <p>Mã Vân thi đại học tổng cộng 3 lần. Cả hai lần đầu đều trượt. Đến lần thứ ba, với điểm số 79 môn Toán, Mã Vân chính thức đỗ vào hệ tại chức của Đại học Sư phạm Hàng Châu. May mắn là năm đó, lượng sinh viên đỗ vào hệ chính quy của ngành Anh văn Đại học Sư phạm Hàng Châu không đủ chỉ tiêu, lãnh đạo khoa quyết định chọn những sinh viên đỗ điểm cao hệ tại chức sang học chính quy, trong đó có Mã Vân.</p>
          <p>Mã Vân tuy dốt Toán nhưng lại rất giỏi Anh văn, vào đại học với anh "như cá gặp nước". Sau khi tốt nghiệp, Mã Vân được giữ lại làm giảng viên (là người duy nhất được giữ lại trong số 500 sinh viên tốt nghiệp năm đó).</p>
          <p>Ngay sau khi kết thúc lời hứa giảng dạy ít nhất 5 năm với hiệu trưởng Đại học Sư phạm Hàng Châu, Mã Vân tự mình thành lập một công ty dịch thuật mang tên Hải Bác. Lúc bấy giờ khái niệm công ty dịch thuật vẫn còn xa lạ tại Trung Quốc nên hoạt động của Hải Bác gặp nhiều khó khăn. Nhưng sau đó, với sự kiên trì của Mã Vân cùng các đồng sự, Hải Bác dần hoạt động ổn định và phát triển mạnh mẽ.</p>
          <div className="next-button">
            <Link to="/page2">Next</Link>
          </div>
        </div>
      </>
      
    );
  }
}

export default Page1;

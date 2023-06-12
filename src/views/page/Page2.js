import React from 'react';
import './Page2.css';
import Navbar from '../Navbar'

class Page2 extends React.Component {
  handleClick = () => {
    alert('Buy books to read more');
  };
  render() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <h1>Triết lý quản lý: Trách nhiệm nhiều tới đâu, quyền lực lớn tới đó</h1>
          <p>"Bằng lòng chịu trách nhiệm vì một người, vậy bạn là một người tốt; bằng lòng chịu trách nhiệm vì 5 người, vậy bạn là một giám đốc; bằng lòng chịu trách nhiệm về 200-300 người, vậy bạn là một Tổng giám đốc; bằng lòng chịu trách nhiệm vì cả một dân tộc, vậy bạn là Tổng bí thư hoặc Tổng thống" - Mã Vân.</p>
          <p>Dịch SARS năm 2003 là một kỷ niệm không thể nào quên của Mã Vân. Năm đó, một nhân viên của Alibaba sau khi đi dự hội chợ ở Quảng Châu (vùng dịch) đã bị nhiễm bệnh. Mọi người đặt câu hỏi tại sao đã biết nơi đó có dịch bệnh mà anh vẫn cử người đến. Bản thân Mã Vân cũng vô cùng buồn bã, nhưng trước đó vì lời cam kết với khách hàng "trừ trường hợp bất khả kháng mới không tham dự, những việc có thể làm Alibaba vẫn sẽ thực hiện", nên anh đã cử người đi. Ai ngờ nhân viên lại bị nhiễm dịch. Một khuya nọ anh đã ngồi viết một bức thư cho nhân viên bị nhiễm bệnh và toàn thể thành viên Alibaba. Lá thư thể hiện sự cáo lỗi chân thành của người đứng đầu đã ra quyết định, đồng thời nói lên những việc mà tất cả mọi người cần làm trong lúc nước sôi lửa bỏng. Sự thẳng thắn, chân thành và đầy bản lĩnh thể hiện trong lá thư đã làm lay động tất cả các nhân viên. Họ tình nguyện nối mạng tại nhà để làm việc trong thời gian mọi người bị cách ly, thậm chí còn tổ chức những hoạt động giải trí như thi hát karaoke qua internet.</p>
          <p>Sau này nhớ lại, Mã Vân còn nói vui rằng: "Đó là một dịp tốt, dịch SARS đã trở thành thời khắc gắn kết lòng người".</p>
          <p>Quản lý doanh nghiệp chính là quản lý lòng người. Với Mã Vân, điều cần phải làm khi muốn giữ một ai đó ở lại là khiến họ cam tâm tình nguyện ở lại, vì ta nên hiểu rằng "trái tim chín ép sẽ không ngọt".</p>
          <button className='next-button' onClick={() => this.handleClick()}>Next</button>
        </div>
      </>
      
    );
  }
}

export default Page2;

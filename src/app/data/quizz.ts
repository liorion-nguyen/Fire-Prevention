import { images } from '@/constants'
import { ImageSourcePropType } from 'react-native'

export interface QuizzData {
  image: ImageSourcePropType
  ques: string
  choose: string[]
  ans: number
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: images.post1,
      ques: 'Làm thế nào để ngăn ngừa cháy nổ trong nhà bếp?',
      choose: [
        'Luôn giám sát khi nấu ăn và giữ bếp sạch sẽ.',
        'Để dầu mỡ gần bếp lửa.',
        'Sử dụng bếp gas mà không kiểm tra rò rỉ.',
      ],
      ans: 0,
    },
    {
      image: images.post1,
      ques: 'Chúng ta nên làm gì khi phát hiện khói trong nhà?',
      choose: [
        'Bỏ qua và tiếp tục công việc.',
        'Kiểm tra nguồn khói và gọi cứu hỏa nếu cần.',
        'Mở cửa sổ và không làm gì khác.',
      ],
      ans: 1,
    },
    {
      image: images.post1,
      ques: 'Thiết bị nào cần có trong mỗi gia đình để phòng chống cháy nổ?',
      choose: [
        'Máy hút bụi.',
        'Bình chữa cháy.',
        'Máy giặt.',
      ],
      ans: 1,
    },
    {
      image: images.post1,
      ques: 'Tại sao không nên để các vật dễ cháy gần nguồn nhiệt?',
      choose: [
        'Vì chúng có thể gây cháy nổ.',
        'Vì chúng làm đẹp không gian.',
        'Vì chúng không ảnh hưởng gì.',
      ],
      ans: 0,
    },
    {
      image: images.post1,
      ques: 'Điều gì cần làm khi có cháy nhỏ trong nhà?',
      choose: [
        'Chạy ra ngoài ngay lập tức.',
        'Dùng bình chữa cháy để dập lửa nếu an toàn.',
        'Gọi hàng xóm đến giúp.',
      ],
      ans: 1,
    },
    {
      image: images.post1,
      ques: 'Tại sao cần có kế hoạch thoát hiểm trong gia đình?',
      choose: [
        'Để mọi người biết cách thoát ra an toàn.',
        'Để trang trí nhà cửa.',
        'Để làm cho nhà cửa phức tạp hơn.',
      ],
      ans: 0,
    },
    {
      image: images.post1,
      ques: 'Hành động nào giúp giảm nguy cơ cháy nổ từ thiết bị điện?',
      choose: [
        'Sử dụng thiết bị điện quá tải.',
        'Rút phích cắm khi không sử dụng.',
        'Để thiết bị điện hoạt động liên tục.',
      ],
      ans: 1,
    },
    {
      image: images.post1,
      ques: 'Tại sao cần bảo trì định kỳ bình chữa cháy?',
      choose: [
        'Để đảm bảo chúng hoạt động hiệu quả khi cần.',
        'Để làm đẹp nhà cửa.',
        'Để tăng chi phí bảo trì.',
      ],
      ans: 0,
    },
  ],
  medium: [
    {
      image: images.post3,
      ques: 'Tại sao cần kiểm tra định kỳ hệ thống điện trong nhà?',
      choose: [
        'Để đảm bảo hệ thống hoạt động tốt và ngăn ngừa cháy nổ.',
        'Để tăng hóa đơn điện.',
        'Để làm đẹp nhà cửa.',
      ],
      ans: 0,
    },
    {
      image: images.post3,
      ques: 'Loại vật liệu nào nên được sử dụng để xây dựng nhà chống cháy?',
      choose: [
        'Gỗ.',
        'Bê tông và thép.',
        'Nhựa.',
      ],
      ans: 1,
    },
    {
      image: images.post3,
      ques: 'Tại sao cần có kế hoạch thoát hiểm khi xảy ra cháy?',
      choose: [
        'Để mọi người biết cách thoát ra an toàn.',
        'Để trang trí nhà cửa.',
        'Để làm cho nhà cửa phức tạp hơn.',
      ],
      ans: 0,
    },
    {
      image: images.post3,
      ques: 'Hành động nào giúp giảm nguy cơ cháy nổ từ thiết bị điện?',
      choose: [
        'Sử dụng thiết bị điện quá tải.',
        'Rút phích cắm khi không sử dụng.',
        'Để thiết bị điện hoạt động liên tục.',
      ],
      ans: 1,
    },
    {
      image: images.post3,
      ques: 'Tại sao cần bảo trì định kỳ bình chữa cháy?',
      choose: [
        'Để đảm bảo chúng hoạt động hiệu quả khi cần.',
        'Để làm đẹp nhà cửa.',
        'Để tăng chi phí bảo trì.',
      ],
      ans: 0,
    },
    {
      image: images.post3,
      ques: 'Tại sao cần có hệ thống báo cháy trong các tòa nhà cao tầng?',
      choose: [
        'Để cảnh báo sớm và giúp sơ tán kịp thời.',
        'Để làm đẹp tòa nhà.',
        'Để tăng chi phí xây dựng.',
      ],
      ans: 0,
    },
    {
      image: images.post3,
      ques: 'Biện pháp nào giúp giảm nguy cơ cháy nổ từ hóa chất?',
      choose: [
        'Bảo quản hóa chất ở nơi an toàn, xa nguồn nhiệt.',
        'Để hóa chất gần bếp lửa.',
        'Không cần bảo quản đặc biệt.',
      ],
      ans: 0,
    },
    {
      image: images.post3,
      ques: 'Tại sao cần đào tạo phòng cháy chữa cháy cho nhân viên?',
      choose: [
        'Vì nó giúp nhân viên biết cách xử lý tình huống khẩn cấp.',
        'Vì nó làm tăng chi phí đào tạo.',
        'Vì nó không cần thiết.',
      ],
      ans: 0,
    },
  ],
  hard: [
    {
      image: images.post2,
      ques: 'Hiệu ứng nào có thể xảy ra khi không kiểm soát được cháy rừng?',
      choose: [
        'Tăng độ phủ xanh của Trái Đất.',
        'Gây thiệt hại lớn về môi trường và tài sản.',
        'Giảm lượng khí CO2 trong khí quyển.',
      ],
      ans: 1,
    },
    {
      image: images.post2,
      ques: 'Khí nào thường được sử dụng trong hệ thống chữa cháy tự động?',
      choose: [
        'Oxy.',
        'Carbon dioxide (CO2).',
        'Nitrogen.',
      ],
      ans: 1,
    },
    {
      image: images.post2,
      ques: 'Tại sao việc đào tạo phòng cháy chữa cháy cho nhân viên là quan trọng?',
      choose: [
        'Vì nó giúp nhân viên biết cách xử lý tình huống khẩn cấp.',
        'Vì nó làm tăng chi phí đào tạo.',
        'Vì nó không cần thiết.',
      ],
      ans: 0,
    },
    {
      image: images.post2,
      ques: 'Biện pháp nào sau đây hiệu quả nhất để ngăn ngừa cháy nổ trong nhà máy?',
      choose: [
        'Sử dụng thiết bị không đạt tiêu chuẩn.',
        'Thực hiện kiểm tra an toàn định kỳ và bảo trì thiết bị.',
        'Bỏ qua các quy định an toàn.',
      ],
      ans: 1,
    },
    {
      image: images.post2,
      ques: 'Tại sao cần có hệ thống báo cháy trong các tòa nhà cao tầng?',
      choose: [
        'Để cảnh báo sớm và giúp sơ tán kịp thời.',
        'Để làm đẹp tòa nhà.',
        'Để tăng chi phí xây dựng.',
      ],
      ans: 0,
    },
    {
      image: images.post2,
      ques: 'Tại sao cần có kế hoạch thoát hiểm khi xảy ra cháy?',
      choose: [
        'Để mọi người biết cách thoát ra an toàn.',
        'Để trang trí nhà cửa.',
        'Để làm cho nhà cửa phức tạp hơn.',
      ],
      ans: 0,
    },
    {
      image: images.post2,
      ques: 'Tại sao cần bảo trì định kỳ bình chữa cháy?',
      choose: [
        'Để đảm bảo chúng hoạt động hiệu quả khi cần.',
        'Để làm đẹp nhà cửa.',
        'Để tăng chi phí bảo trì.',
      ],
      ans: 0,
    },
    {
      image: images.post2,
      ques: 'Biện pháp nào giúp giảm nguy cơ cháy nổ từ hóa chất?',
      choose: [
        'Bảo quản hóa chất ở nơi an toàn, xa nguồn nhiệt.',
        'Để hóa chất gần bếp lửa.',
        'Không cần bảo quản đặc biệt.',
      ],
      ans: 0,
    },
  ],
}
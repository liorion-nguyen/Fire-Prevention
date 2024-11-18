import { images } from '@/constants'
import { ETypeData, IData } from '@/types/common'

export const videoData: IData[] = [
  {
    id: 1,
    image: images.post1,
    type: ETypeData.VIDEO,
    youtubeId: 'kImqwzkKNH4',
    title: 'Cẩm nang phòng cháy chữa cháy trong gia đình',
    description:
      'Mỗi năm, hàng nghìn vụ cháy xảy ra gây thiệt hại lớn về người và tài sản. Video này cung cấp kiến thức cơ bản về phòng cháy chữa cháy và kỹ năng thoát nạn khi có cháy xảy ra, dựa trên hướng dẫn của Cục Cảnh sát phòng cháy chữa cháy và cứu nạn cứu hộ.',
    body: [
      {
        title: 'Nguyên nhân cháy nổ từ thiết bị điện',
        content:
          'Sự cố hệ thống điện là một trong hai nguyên nhân chủ yếu gây ra cháy. Để phòng tránh, cần tính toán thiết kế và lắp đặt hệ thống điện đảm bảo tiêu chuẩn, lựa chọn dây dẫn điện chất lượng cao và thường xuyên kiểm tra, bảo trì các thiết bị điện.',
      },
      {
        title: 'Cháy nổ do cc chất dễ cháy',
        content:
          'Các chất dễ cháy như xăng, dầu, khí đốt cần được bảo quản đúng cách. Tránh để vật liệu dễ cháy gần nguồn lửa, nguồn nhiệt và luôn có người giám sát khi sử dụng.',
      },
      {
        title: 'Kỹ năng thoát nạn khi xảy ra cháy',
        content:
          'Khi xảy ra cháy, không cố mang theo đồ có giá trị. Sử dụng khăn ướt bịt mặt để tránh khói độc, ngắt cầu dao điện và chỉ mở cửa cần thiết. Không sử dụng thang máy và luôn giữ cơ thể ở vị trí thấp khi di chuyển qua khu vực có khói.',
      },
      {
        title: 'Trang bị thiết bị phòng cháy chữa cháy',
        content:
          'Mỗi gia đình nên trang bị bình chữa cháy, thiết bị cảnh báo cháy, thang dây và mặt nạ phòng độc. Khi sử dụng bình chữa cháy, cần thực hiện đúng các bước để đảm bảo an toàn.',
      },
    ],
  },
  {
    id: 2,
    image: images.post2,
    type: ETypeData.VIDEO,
    youtubeId: 'JZIWa5lWbKw',
    title: 'Cách sử dụng bình cứu hỏa bột và bình CO2 khi có cháy - Thiết bị Cứu hỏa Gia Đình',
    description:
      'Video này hướng dẫn cách sử dụng hai loại bình chữa cháy thông dụng nhất là bình bột và bình CO2, giúp bạn xử lý hiệu quả khi có cháy nổ xảy ra tại cơ sở hoặc hộ gia đình.',
    body: [
      {
        title: 'Bước 1: Sử dụng bình bột chữa cháy',
        content:
          'Khi xảy ra cháy, di chuyển bình bột đến đám cháy. Trong quá trình di chuyển, lắc sốc bình khoảng 3 đến 4 lần để bột được tơi xốp. Khi gần đến đám cháy, đặt bình xuống, một tay giữ ở phần cổ bình, tay kia nắm chốt kẹp chì dọc theo phương ngang.',
      },
      {
        title: 'Bước 2: Sử dụng bình khí chữa cháy',
        content:
          'Di chuyển đến vị trí ngang hoặc trên hướng gió, hướng loa phun trực tiếp vào gốc lửa và bóp van. Bóp van liên tục cho đến khi đám cháy được dập tắt.',
      },
      {
        title: 'Lưu ý khi sử dụng bình chữa cháy',
        content:
          'Mọi người dân cần chấp hành nghiêm chỉnh kiến thức pháp luật về phòng cháy chữa cháy. Nên trang bị các loại bình chữa cháy xách tay tại nhà để xử lý khi có cháy nổ xảy ra.',
      },
    ],
  },
  {
    id: 3,
    image: images.post3,
    type: ETypeData.VIDEO,
    youtubeId: 'sWG43XogDKE',
    title: 'Những kỹ năng cần thiết cho người dân khi xảy ra Cháy',
    description:
      'Video này cung cấp các kỹ năng quan trọng mà người dân cần biết khi xảy ra cháy, bao gồm cách thoát hiểm an toàn và sử dụng các thiết bị phòng cháy chữa cháy.',
    body: [
      {
        title: 'Bước 1: Tìm cách dập lửa và thoát nạn',
        content:
          'Cần bình tĩnh xác định vị trí ngọn lửa và khói. Nếu có thể, dùng nước hoặc bình chữa cháy để dập lửa. Nếu lửa quá lớn, nhanh chóng tìm cách thoát hiểm và gọi 114 để được trợ giúp.',
      },
      {
        title: 'Bước 2: Những điều cần nhớ khi thoát hiểm',
        content:
          'Không cố mang theo đồ có giá trị hay vật nuôi. Sử dụng khăn ướt bịt mặt để tránh hít phải khói độc. Ngắt cầu dao điện nơi xảy ra cháy và chỉ mở cửa cần thiết để ngăn cháy lan.',
      },
      {
        title: 'Bước 3: Cách xử lý khi không thể ra ngoài',
        content:
          'Nếu không thể thoát ra ngoài, hãy tập hợp mọi người vào một phòng và chặn các khe hở bằng khăn ướt để ngăn khói. Không nấp dưới gầm giường hoặc trong tủ.',
      },
      {
        title: 'Bước 4: Trang bị thiết bị phòng cháy chữa cháy',
        content:
          'Trang bị bình chữa cháy, mặt nạ lọc độc và các thiết bị thoát hiểm khác để sẵn sàng đối phó với cháy nổ bất cứ lúc nào.',
      },
    ],
  },
  {
    id: 4,
    image: images.post4,
    type: ETypeData.VIDEO,
    youtubeId: '0LS-vYRWXsI',
    title: 'Kỹ năng bảo vệ bản thân, gia đình và tự thoát hiểm khi xảy ra hỏa hoạn',
    description:
      'Video này cung cấp các kỹ năng quan trọng mà người dân cần biết khi xảy ra cháy, bao gồm cách thoát hiểm an toàn và sử dụng các thiết bị phòng cháy chữa cháy.',
    body: [
      {
        title: 'Bước 1: Phát hiện và dập lửa',
        content:
          'Khi phát hiện có đám cháy, đừng hoảng hốt. Bình tĩnh xác định vị trí ngọn lửa và khói. Nếu đám cháy nhỏ, dùng bình chữa cháy, cát, hoặc chăn ướt để dập lửa. Nếu lửa quá lớn, nhanh chóng tìm cách thoát hiểm và gọi 114 để được trợ giúp.',
      },
      {
        title: 'Bước 2: Tìm kiếm lối thoát an toàn',
        content:
          'Lối thoát an toàn là lối không bị khói và lửa đe dọa. Các lối ra phải dễ thấy và được đánh dấu rõ ràng. Tránh sử dụng thang máy, di chuyển theo cầu thang bộ.',
      },
      {
        title: 'Bước 3: Mở cửa an toàn',
        content:
          'Trước khi mở cửa, kiểm tra nhiệt độ bằng mu bàn tay. Nếu cửa ấm, không mở. Nếu cửa mát và không có khói, mở cửa chậm và cẩn thận. Đóng cửa nhanh nếu thấy lửa hoặc khói.',
      },
      {
        title: 'Bước 4: Chống nhiễm độc khói',
        content:
          'Khói là nguyên nhân tử vong cao. Sử dụng khăn ướt che miệng và mũi, hoặc mặt nạ chống khói. Di chuyển nhanh ra khỏi khu vực nhiễm khói, giữ cơ thể ở vị trí thấp.',
      },
      {
        title: 'Bước 5: Hành động khi không thể thoát ra ngoài',
        content:
          'Nếu không thể thoát ra ngoài, tập hợp mọi người vào một phòng, chặn khe hở quanh cửa bằng khăn ướt. Đứng trước cửa sổ để hít thở và gọi giúp đỡ. Không nấp dưới gầm giường hay trong tủ.',
      },
      {
        title: 'Bước 6: Hợp tác và giúp đỡ',
        content:
          'Làm theo hướng dẫn của lực lượng cứu hộ. Chỉ giúp đỡ người khác khi bạn an toàn. Sơ cứu người bị ngạt, ngất, hoặc bỏng trước khi đưa đi cấp cứu.',
      },
      {
        title: 'Bước 7: Không quay lại nhà bị cháy',
        content:
          'Khi đã thoát ra ngoài an toàn, không quay lại nhà bị cháy. Tập trung ở nơi an toàn và đợi đội cứu hỏa đến.',
      },
    ],
  },
  {
    id: 5,
    image: images.post5,
    type: ETypeData.VIDEO,
    youtubeId: 'qM5pW0ng9l0',
    title: 'Kỹ năng thoát nạn khi có cháy ở nhà cao tầng',
    description:
      'Video này cung cấp các kỹ năng quan trọng mà người dân cần biết khi xảy ra cháy ở nhà cao tầng, bao gồm cách thoát hiểm an toàn và sử dụng các thiết bị phòng cháy chữa cháy.',
    body: [
      {
        title: 'Bước 1: Phát hiện và báo động',
        content:
          'Khi phát hiện có cháy, ngay lập tức kích hoạt hệ thống báo cháy và gọi 114 để báo cáo tình huống. Cảnh báo mọi người xung quanh và bắt đầu sơ tán.',
      },
      {
        title: 'Bước 2: Tìm kiếm lối thoát an toàn',
        content:
          'Tìm lối thoát theo đèn ho���c bảng chỉ dẫn. Tr��nh sử dụng thang máy, di chuyển theo cầu thang bộ. Nếu phải băng qua lửa hoặc khói, dùng mặt nạ phòng độc hoặc chăn áo nhúng nước để che chắn.',
      },
      {
        title: 'Bước 3: Mở cửa an toàn',
        content:
          'Trước khi mở cửa, kiểm tra nhiệt độ cánh cửa bằng mu bàn tay. Nếu cửa ấm, không mở. Nếu cửa mát và không có khói, mở cửa chậm và cẩn thận.',
      },
      {
        title: 'Bước 4: Hành động khi không thể thoát ra ngoài',
        content:
          'Nếu không có lối thoát, ra ban công hoặc cửa sổ để ra hiệu hoặc gọi điện cho cảnh sát phòng cháy chữa cháy. Không nhảy từ tầng quá cao nếu không có hướng dẫn của lực lượng cứu hộ.',
      },
      {
        title: 'Bước 5: Sử dụng vật dụng hỗ trợ',
        content:
          'Có thể dùng đồ vải nối lại hoặc thang dây để leo xuống đất. Luôn giữ bình tĩnh và làm theo hướng dẫn của lực lượng cứu hộ.',
      },
    ],
  },
]

export const lessonData: IData[] = [
  {
    id: 6,
    image: images.post3,
    type: ETypeData.LESSON,
    youtubeId: 'sWG43XogDKE',
    title: 'Những kỹ năng cần thiết cho người dân khi xảy ra Cháy',
    description:
      'Video này cung cấp các kỹ năng quan trọng mà người dân cần biết khi xảy ra cháy, bao gồm cách thoát hiểm an toàn và sử dụng các thiết bị phòng cháy chữa cháy.',
    body: [
      {
        title: 'Bước 1: Tìm cách dập lửa và thoát nạn',
        content:
          'Cần bình tĩnh xác định vị trí ngọn lửa và khói. Nếu có thể, dùng nước hoặc bình chữa cháy để dập lửa. Nếu lửa quá lớn, nhanh chóng tìm cách thoát hiểm và gọi 114 để được trợ giúp.',
      },
      {
        title: 'Bước 2: Những điều cần nhớ khi thoát hiểm',
        content:
          'Không cố mang theo đồ có giá trị hay vật nuôi. Sử dụng khăn ướt bịt mặt để tránh hít phải khói độc. Ngắt cầu dao điện nơi xảy ra cháy và chỉ mở cửa cần thiết để ngăn cháy lan.',
      },
      {
        title: 'Bước 3: Cách xử lý khi không thể ra ngoài',
        content:
          'Nếu không thể thoát ra ngoài, hãy tập hợp mọi người vào một phòng và chặn các khe hở bằng khăn ướt để ngăn khói. Không nấp dưới gầm giường hoặc trong tủ.',
      },
      {
        title: 'Bước 4: Trang bị thiết bị phòng cháy chữa cháy',
        content:
          'Trang bị bình chữa cháy, mặt nạ lọc độc và các thiết bị thoát hiểm khác để sẵn sàng đối phó với cháy nổ bất cứ lúc nào.',
      },
    ],
  },
  {
    id: 7,
    image: images.post7,
    type: ETypeData.LESSON,
    youtubeId: 'n6b1SyciWyI',
    title: 'Cách phòng cháy nổ trong gia đình',
    description:
      'Video này cung cấp các kỹ năng quan trọng mà người dân cần biết để phòng tránh cháy nổ trong gia đình, bao gồm cách sắp xếp đồ dùng an toàn và sử dụng thiết bị phòng cháy chữa cháy.',
    body: [
      {
        title: 'Bước 1: Phòng tránh nguy cơ cháy nổ',
        content:
          'Khng buôn bán, tàng trữ trái phép các chất dễ cháy nổ. Sắp xếp đồ dùng, vật liệu dễ cháy xa nguồn lửa, nguồn điện ít nhất 50cm. Hệ thống điện trong nhà phải có thiết bị bảo vệ quá tải và luôn tắt điện khi đi ngủ hoặc trước khi ra khỏi nhà.',
      },
      {
        title: 'Bước 2: Trang bị thiết bị phòng cháy chữa cháy',
        content:
          'Lắp đặt thiết bị báo cháy, báo rò rỉ gas và trang bị bình chữa cháy loại nhỏ trong gia đình. Khi đun nấu hay hàn cắt kim loại trong nhà, cần có người giám sát cẩn thận.',
      },
      {
        title: 'Bước 3: Bố trí lối thoát hiểm',
        content:
          'Bố trí các lối thoát nạn như lối thoát phụ, cửa phụ. Tìm hiểu cách giữ mái nhà, cách phá cửa mở lối thoát trong tình huống khẩn cấp.',
      },
      {
        title: 'Bước 4: Lưu ý quan trọng khác',
        content:
          'Luôn chú ý các lưu ý khác về phòng chống cháy nổ và theo dõi các video clip tiếp theo để cập nhật thông tin mới nhất.',
      },
    ],
  },
  {
    id: 8,
    image: images.post8,
    type: ETypeData.LESSON,
    youtubeId: 'eno-a8zKVsQ',
    title: 'Xử lý tình huống khi có hỏa hoạn',
    description:
      'Video này cung cấp các kỹ năng quan trọng mà người dân cần biết để xử lý tình huống khi có hỏa hoạn, bao gồm cách thoát hiểm an toàn và sử dụng thiết bị phòng cháy chữa cháy.',
    body: [
      {
        title: 'Bước 1: Phát hiện và báo động',
        content:
          'Khi phát hiện có hỏa hoạn, ngay lập tức kích hoạt hệ thống báo cháy và gọi 114 để báo cáo tình huống. Cảnh báo mọi người xung quanh và bắt đầu sơ tán.',
      },
      {
        title: 'Bước 2: Sử dụng thiết bị chữa cháy',
        content:
          'Nếu đám cháy nhỏ và có thể kiểm soát, sử dụng bình chữa cháy để dập lửa. Hướng vòi phun vào gốc lửa và bóp van cho đến khi lửa tắt.',
      },
      {
        title: 'Bước 3: Thoát hiểm an toàn',
        content:
          'Sử dụng lối thoát hiểm đã được bố trí sẵn. Tránh sử dụng thang máy. Nếu có khói, cúi thấp người và dùng khăn ướt che miệng và mũi.',
      },
      {
        title: 'Bước 4: Lưu ý quan trọng khi thoát hiểm',
        content:
          'Không quay lại lấy đồ đạc. Nếu bị kẹt, tìm cách báo hiệu cho đội cứu hộ biết vị trí của bạn. Luôn giữ bình tĩnh và làm theo hướng dẫn của nhân viên cứu hộ.',
      },
    ],
  },
  {
    id: 9,
    image: images.post9,
    type: ETypeData.LESSON,
    youtubeId: '_9LR4YZTy34',
    title: 'Nên trang bị những vật dụng gì để thoát khỏi đám cháy?',
    description:
      'Video này hướng dẫn những vật dụng cần thiết mà mỗi gia đình nên trang bị để đảm bảo an toàn khi xảy ra hỏa hoạn, giúp thoát hiểm nhanh chóng và hiệu quả.',
    body: [
      {
        title: 'Bước 1: Trang bị bình chữa cháy',
        content:
          'Mỗi gia đình nên có ít nhất một bình chữa cháy xách tay. Đặt bình ở nơi dễ tiếp cận và đảm bảo mọi người trong gia đình biết cách sử dụng.',
      },
      {
        title: 'Bước 2: Mặt nạ phòng độc',
        content:
          'Trang bị mặt nạ phòng độc để bảo vệ khỏi khói độc khi thoát hiểm. Đảm bảo mặt nạ vừa vặn và dễ sử dụng cho tất cả thành viên trong gia đình.',
      },
      {
        title: 'Bước 3: Thang dây thoát hiểm',
        content:
          'Đối với các căn hộ cao tầng, thang dây thoát hiểm là vật dụng cần thiết. Đặt thang ở vị trí dễ lấy và thực hành sử dụng định kỳ.',
      },
      {
        title: 'Bước 4: Đèn pin và còi báo động',
        content:
          'Trang bị đèn pin và còi báo động để sử dụng trong trường hợp mất điện hoặc cần báo hiệu cho đội cứu hộ. Đảm bảo đèn pin có pin đầy đủ và còi hoạt động tốt.',
      },
    ],
  },
  {
    id: 10,
    image: images.post10,
    type: ETypeData.LESSON,
    youtubeId: 'MYxfkDDWJFI',
    title: 'Mẹo bảo vệ các thiết bị điện trong gia đình vào mùa mưa',
    description:
      'Video này hướng dẫn các biện pháp cần thiết để bảo vệ thiết bị điện trong gia đình vào mùa mưa bão, giúp đảm bảo an toàn và tránh nguy cơ hư hỏng.',
    body: [
      {
        title: 'Bước 1: Kiểm tra hệ thống điện trước mùa mưa bão',
        content:
          'Kiểm tra kỹ hệ thống điện trong nhà, đặc biệt là các đường dây đi ngầm trong tường để phát hiện và khắc phục kịp thời các sự cố tiềm ẩn do ẩm ướt.',
      },
      {
        title: 'Bước 2: Bố trí thiết bị điện ở vị trí cao',
        content:
          'Đặt các thiết bị điện như TV, lò nướng, bếp điện ở vị trí cao, khô thoáng để tránh ngập nước. Đảm bảo ổ cắm và dây dẫn điện cũng được bố trí ở vị trí cao hơn mức nước ngập.',
      },
      {
        title: 'Bước 3: Lắp đặt cầu dao hoặc thiết bị ngắt điện riêng biệt',
        content:
          'Lắp đặt cầu dao hoặc thiết bị ngắt điện riêng biệt cho từng tầng để dễ kiểm soát. Trong trường hợp ngập lụt, có thể ngắt điện tầng thấp mà không ảnh hưởng đến các tầng trên.',
      },
      {
        title: 'Bước 4: Ngắt nguồn điện khi thiết bị bị dính nước',
        content:
          'Ngay lập tức ngắt nguồn điện nếu thiết bị điện bị dính nước. Tránh chạm vào thiết bị bằng tay ướt để đảm bảo an toàn.',
      },
      {
        title: 'Bước 5: Ngắt điện các thiết bị không cần thiết khi mưa bão',
        content:
          'Ngắt điện các thiết bị không cần thiết khi trời mưa bão, sấm chớp để tránh nguy cơ chập điện và hư hỏng thiết bị.',
      },
      {
        title: 'Bước 6: Tránh sửa chữa điện khi không có chuyên môn',
        content:
          'Không tự ý sửa chữa dây điện, đặc biệt là các thiết bị ngoài trời nếu không có chuyên môn. Tránh tiếp xúc với cột điện, dây nối đất, và các thiết bị điện khác.',
      },
    ],
  },
]

export const totalData = [...videoData, ...lessonData]
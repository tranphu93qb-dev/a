
import { type Question, Trait, type ResultType } from './types';

export const QUESTIONS: Question[] = [
  // E vs I
  {
    question: "Sau một tuần làm việc dài, bạn muốn làm gì vào tối thứ Sáu?",
    options: [
      { text: "Đi chơi, gặp gỡ bạn bè để nạp lại năng lượng.", trait: Trait.E },
      { text: "Ở nhà thư giãn một mình với sách hoặc phim.", trait: Trait.I },
    ],
  },
  {
    question: "Trong một buổi tiệc, bạn thường là người...",
    options: [
      { text: "Bắt chuyện với nhiều người, kể cả người lạ.", trait: Trait.E },
      { text: "Chủ yếu nói chuyện với những người bạn đã quen.", trait: Trait.I },
    ],
  },
  {
    question: "Khi cần giải quyết một vấn đề, bạn thích...",
    options: [
      { text: "Thảo luận với người khác để có thêm ý tưởng.", trait: Trait.E },
      { text: "Suy nghĩ một mình để tập trung và phân tích.", trait: Trait.I },
    ],
  },
   {
    question: "Bạn cảm thấy tràn đầy năng lượng hơn khi...",
    options: [
      { text: "Ở giữa một đám đông sôi nổi.", trait: Trait.E },
      { text: "Có không gian yên tĩnh cho riêng mình.", trait: Trait.I },
    ],
  },
  {
    question: "Cách bạn xử lý sự chú ý của mọi người:",
    options: [
      { text: "Thoải mái khi là trung tâm của sự chú ý.", trait: Trait.E },
      { text: "Thường tránh trở thành tâm điểm.", trait: Trait.I },
    ],
  },
  // S vs N
  {
    question: "Khi tiếp nhận thông tin mới, bạn quan tâm hơn đến...",
    options: [
      { text: "Các chi tiết cụ thể, thực tế và đã được chứng minh.", trait: Trait.S },
      { text: "Các ý tưởng, khái niệm và khả năng trong tương lai.", trait: Trait.N },
    ],
  },
  {
    question: "Khi kể một câu chuyện, bạn có xu hướng...",
    options: [
      { text: "Mô tả các sự kiện theo trình tự, với nhiều chi tiết thực tế.", trait: Trait.S },
      { text: "Tập trung vào ý nghĩa ẩn sau và bức tranh toàn cảnh.", trait: Trait.N },
    ],
  },
  {
    question: "Bạn tin tưởng hơn vào...",
    options: [
      { text: "Kinh nghiệm thực tế và những gì bạn có thể thấy, chạm vào.", trait: Trait.S },
      { text: "Linh cảm, trực giác và những suy luận mang tính biểu tượng.", trait: Trait.N },
    ],
  },
   {
    question: "Trong công việc, bạn thích...",
    options: [
      { text: "Làm theo các bước đã được hướng dẫn rõ ràng.", trait: Trait.S },
      { text: "Sáng tạo ra các phương pháp và giải pháp mới.", trait: Trait.N },
    ],
  },
  {
    question: "Bạn mô tả mình là người...",
    options: [
      { text: "Thực tế và có đôi chân trên mặt đất.", trait: Trait.S },
      { text: "Giàu trí tưởng tượng và luôn nhìn về tương lai.", trait: Trait.N },
    ],
  },
  // T vs F
  {
    question: "Khi ra quyết định quan trọng, yếu tố nào ảnh hưởng đến bạn nhiều nhất?",
    options: [
      { text: "Phân tích logic, sự thật và tính khách quan.", trait: Trait.T },
      { text: "Cảm xúc cá nhân và tác động của nó lên người khác.", trait: Trait.F },
    ],
  },
  {
    question: "Khi một người bạn gặp khó khăn, bạn sẽ...",
    options: [
      { text: "Đề xuất các giải pháp thực tế để giải quyết vấn đề.", trait: Trait.T },
      { text: "Lắng nghe, an ủi và thể hiện sự đồng cảm.", trait: Trait.F },
    ],
  },
  {
    question: "Bạn tự hào hơn về việc mình là người...",
    options: [
      { text: "Công bằng và lý trí.", trait: Trait.T },
      { text: "Tốt bụng và thấu cảm.", trait: Trait.F },
    ],
  },
  {
    question: "Khi nhận xét công việc của người khác, bạn ưu tiên...",
    options: [
      { text: "Sự thật khách quan, ngay cả khi nó có thể làm mất lòng.", trait: Trait.T },
      { text: "Sự hòa hợp và tránh làm tổn thương cảm xúc của họ.", trait: Trait.F },
    ],
  },
    {
    question: "Điều gì quan trọng hơn với bạn?",
    options: [
      { text: "Sự thật và nguyên tắc.", trait: Trait.T },
      { text: "Sự hòa hợp và lòng trắc ẩn.", trait: Trait.F },
    ],
  },
  // J vs P
  {
    question: "Khi lên kế hoạch cho một chuyến đi, bạn thích...",
    options: [
      { text: "Lập lịch trình chi tiết và đặt mọi thứ trước.", trait: Trait.J },
      { text: "Để mọi thứ tự nhiên, quyết định tùy hứng.", trait: Trait.P },
    ],
  },
  {
    question: "Bạn cảm thấy thoải mái hơn khi...",
    options: [
      { text: "Mọi thứ được quyết định và có trật tự.", trait: Trait.J },
      { text: "Có nhiều lựa chọn và giữ mọi thứ linh hoạt.", trait: Trait.P },
    ],
  },
  {
    question: "Phong cách làm việc của bạn là...",
    options: [
      { text: "Hoàn thành công việc sớm để tránh áp lực cuối kỳ.", trait: Trait.J },
      { text: "Làm việc tốt nhất dưới áp lực của hạn chót.", trait: Trait.P },
    ],
  },
  {
    question: "Cuộc sống của bạn có xu hướng...",
    options: [
      { text: "Có cấu trúc và kế hoạch rõ ràng.", trait: Trait.J },
      { text: "Linh hoạt và ứng biến theo tình hình.", trait: Trait.P },
    ],
  },
  {
    question: "Khi hoàn thành một công việc, bạn cảm thấy...",
    options: [
      { text: "Hài lòng vì đã hoàn thành một mục tiêu trong danh sách.", trait: Trait.J },
      { text: "Hứng thú vì đã đến lúc bắt đầu một điều mới mẻ.", trait: Trait.P },
    ],
  },
];

export const RESULTS: Record<string, ResultType> = {
  ISTJ: {
    title: "Người Thanh Tra Thực Tế",
    summary: "Bạn là người có trách nhiệm, đáng tin cậy và thực tế. Bạn coi trọng truyền thống, sự logic và luôn hoàn thành công việc một cách có phương pháp.",
    strengths: ["Trung thành và đáng tin cậy", "Có óc tổ chức cao", "Chú ý đến chi tiết"],
    weaknesses: ["Cứng nhắc, khó thay đổi", "Đôi khi quá chú trọng vào quy tắc", "Khó thể hiện cảm xúc"],
    development: ["Học cách cởi mở với những ý tưởng mới", "Tập thể hiện sự trân trọng với người khác", "Thử những trải nghiệm vượt ra ngoài vùng an toàn"],
  },
  ISFJ: {
    title: "Người Bảo Vệ Tận Tụy",
    summary: "Bạn ấm áp, chu đáo và tận tâm. Bạn có một ý thức mạnh mẽ về trách nhiệm và luôn sẵn lòng giúp đỡ người khác một cách thầm lặng và khiêm tốn.",
    strengths: ["Hỗ trợ và đáng tin cậy", "Thực tế và có óc quan sát tốt", "Có trí nhớ tốt về các chi tiết liên quan đến con người"],
    weaknesses: ["Quá khiêm tốn, ngại thể hiện bản thân", "Khó nói 'không'", "Hay kìm nén cảm xúc cá nhân"],
    development: ["Học cách ưu tiên nhu cầu của bản thân", "Tự tin hơn vào khả năng của mình", "Thẳng thắn bày tỏ ý kiến khi cần thiết"],
  },
  INFJ: {
    title: "Người Cố Vấn Sâu Sắc",
    summary: "Bạn là người có lý tưởng, sâu sắc và có tầm nhìn. Bạn tìm kiếm ý nghĩa trong mọi thứ và mong muốn tạo ra những tác động tích cực đến thế giới.",
    strengths: ["Sáng tạo và có tầm nhìn", "Đồng cảm và thấu hiểu sâu sắc", "Quyết tâm và có định hướng"],
    weaknesses: ["Nhạy cảm quá mức", "Có tiêu chuẩn quá cao (cho bản thân và người khác)", "Khó mở lòng với người khác"],
    development: ["Học cách chấp nhận thực tế không hoàn hảo", "Dành thời gian chăm sóc bản thân", "Chia sẻ ý tưởng của mình với người khác thường xuyên hơn"],
  },
  INTJ: {
    title: "Nhà Kiến Tạo Chiến Lược",
    summary: "Bạn là người độc lập, có tư duy chiến lược và logic. Bạn luôn tìm kiếm cách cải thiện mọi thứ và có khả năng biến những ý tưởng phức tạp thành hiện thực.",
    strengths: ["Tư duy chiến lược xuất sắc", "Tự tin và quyết đoán", "Hiệu quả và có định hướng mục tiêu"],
    weaknesses: ["Thiếu kiên nhẫn với sự kém hiệu quả", "Có thể tỏ ra kiêu ngạo, xa cách", "Gặp khó khăn trong các mối quan hệ lãng mạn"],
    development: ["Lắng nghe và tôn trọng ý kiến của người khác", "Học cách thể hiện cảm xúc một cách xây dựng", "Thực hành sự kiên nhẫn"],
  },
  ISTP: {
    title: "Nhà Cơ Học Linh Hoạt",
    summary: "Bạn là người logic, thực tế và thích khám phá mọi thứ hoạt động như thế nào. Bạn giỏi xử lý các tình huống khủng hoảng và tìm ra giải pháp nhanh chóng.",
    strengths: ["Giỏi giải quyết vấn đề thực tế", "Linh hoạt và ứng biến tốt", "Bình tĩnh dưới áp lực"],
    weaknesses: ["Dễ cảm thấy nhàm chán", "Khó cam kết lâu dài", "Ít khi chia sẻ về cảm xúc cá nhân"],
    development: ["Tìm cách duy trì sự hứng thú trong các dự án dài hạn", "Học cách lên kế hoạch cho tương lai", "Cởi mở hơn trong việc chia sẻ cảm xúc"],
  },
  ISFP: {
    title: "Người Nghệ Sĩ Tinh Tế",
    summary: "Bạn là người ấm áp, nhạy cảm và yêu cái đẹp. Bạn sống trong hiện tại và tận hưởng những trải nghiệm mới mẻ, thường thể hiện bản thân qua các hình thức sáng tạo.",
    strengths: ["Có óc thẩm mỹ cao", "Dễ gần và quyến rũ", "Linh hoạt và sống cho hiện tại"],
    weaknesses: ["Không thích xung đột", "Khó lập kế hoạch dài hạn", "Dễ bị căng thẳng bởi áp lực"],
    development: ["Học cách đối mặt với xung đột một cách lành mạnh", "Tập trung vào việc đặt ra và hoàn thành mục tiêu", "Xây dựng sự tự tin vào bản thân"],
  },
  INFP: {
    title: "Người Hòa Giải Giàu Lý Tưởng",
    summary: "Bạn là người giàu lý tưởng, sáng tạo và sống theo các giá trị cốt lõi của mình. Bạn luôn tìm kiếm sự hòa hợp và mong muốn hiểu rõ bản thân và người khác.",
    strengths: ["Đam mê và giàu năng lượng", "Sáng tạo và giàu trí tưởng tượng", "Trung thành với giá trị cá nhân"],
    weaknesses: ["Quá lý tưởng hóa", "Khó chấp nhận những lời chỉ trích", "Thiếu thực tế"],
    development: ["Tìm cách cân bằng giữa lý tưởng và thực tế", "Học cách nhìn nhận lời góp ý một cách khách quan", "Biến ý tưởng thành hành động cụ thể"],
  },
  INTP: {
    title: "Nhà Tư Duy Logic",
    summary: "Bạn là người ham học hỏi, logic và sáng tạo. Bạn thích khám phá các lý thuyết phức tạp và tìm kiếm lời giải thích hợp lý cho mọi thứ xung quanh.",
    strengths: ["Tư duy phân tích và logic sắc bén", "Sáng tạo và độc đáo", "Khách quan và cởi mở"],
    weaknesses: ["Đãng trí, thiếu thực tế", "Gặp khó khăn trong việc thể hiện cảm xúc", "Hay trì hoãn"],
    development: ["Chú ý hơn đến các chi tiết thực tế", "Thực hành kỹ năng giao tiếp xã hội", "Tập trung vào việc hoàn thành dự án đã bắt đầu"],
  },
  ESTP: {
    title: "Người Doanh Nhân Năng Động",
    summary: "Bạn là người thông minh, năng động và thực tế. Bạn thích hành động và sống trong từng khoảnh khắc, luôn tìm kiếm những cơ hội và thách thức mới.",
    strengths: ["Can đảm và thực tế", "Có khả năng giao tiếp tuyệt vời", "Nhanh trí và có óc quan sát tốt"],
    weaknesses: ["Thiếu kiên nhẫn", "Dễ cảm thấy nhàm chán, không thích các quy tắc", "Ít nhạy cảm với cảm xúc của người khác"],
    development: ["Học cách suy nghĩ về hậu quả lâu dài", "Kiên nhẫn hơn với các quy trình", "Chú ý hơn đến cảm nhận của mọi người xung quanh"],
  },
  ESFP: {
    title: "Người Trình Diễn Sôi Nổi",
    summary: "Bạn là người hướng ngoại, yêu đời và thích trở thành trung tâm của sự chú ý. Bạn mang lại niềm vui và sự hứng khởi cho mọi người xung quanh.",
    strengths: ["Lạc quan và tràn đầy năng lượng", "Kỹ năng giao tiếp xuất sắc", "Thực tế và ứng biến nhanh"],
    weaknesses: ["Không thích xung đột", "Khó tập trung vào các kế hoạch dài hạn", "Dễ bị phân tâm"],
    development: ["Học cách đối mặt và giải quyết xung đột", "Tập trung vào việc hoàn thành những gì đã bắt đầu", "Dành thời gian để suy ngẫm về tương lai"],
  },
  ENFP: {
    title: "Người Truyền Lửa Sáng Tạo",
    summary: "Bạn là người nhiệt tình, sáng tạo và có khả năng kết nối với mọi người. Bạn nhìn thấy vô vàn khả năng trong cuộc sống và truyền cảm hứng cho người khác.",
    strengths: ["Nhiệt tình và lôi cuốn", "Giao tiếp tốt và đồng cảm", "Sáng tạo và linh hoạt"],
    weaknesses: ["Dễ bị căng thẳng", "Suy nghĩ quá nhiều", "Khó tập trung vào một việc duy nhất"],
    development: ["Học cách quản lý căng thẳng hiệu quả", "Tập trung vào việc hoàn thiện các ý tưởng", "Ưu tiên và cam kết với các mục tiêu quan trọng"],
  },
  ENTP: {
    title: "Người Thích Thách Thức Trí Tuệ",
    summary: "Bạn là người thông minh, nhanh trí và thích tranh luận. Bạn thích khám phá các ý tưởng mới và thách thức những quan điểm hiện có.",
    strengths: ["Nhanh trí và có kiến thức rộng", "Sáng tạo trong việc giải quyết vấn đề", "Năng động và lôi cuốn"],
    weaknesses: ["Không thích các chi tiết vụn vặt", "Có thể trở nên quá lý sự", "Khó tập trung và dễ thay đổi"],
    development: ["Học cách kiên trì theo đuổi một ý tưởng đến cùng", "Tôn trọng các quy tắc và giới hạn cần thiết", "Lắng nghe nhiều hơn trong các cuộc tranh luận"],
  },
  ESTJ: {
    title: "Người Điều Hành Quyết Đoán",
    summary: "Bạn là người thực tế, có tổ chức và quyết đoán. Bạn thích quản lý con người và các dự án, đảm bảo mọi thứ được thực hiện một cách hiệu quả và đúng đắn.",
    strengths: ["Tận tâm và có ý chí mạnh mẽ", "Có tài lãnh đạo bẩm sinh", "Trung thực và thẳng thắn"],
    weaknesses: ["Cứng nhắc và bướng bỉnh", "Khó thư giãn", "Thiếu nhạy cảm với cảm xúc của người khác"],
    development: ["Học cách linh hoạt và cởi mở với sự thay đổi", "Dành thời gian để nghỉ ngơi và tận hưởng cuộc sống", "Cố gắng thấu hiểu các quan điểm khác nhau"],
  },
  ESFJ: {
    title: "Người Quan Tâm Chu Đáo",
    summary: "Bạn là người hòa đồng, tận tâm và luôn quan tâm đến nhu cầu của người khác. Bạn thích tạo ra sự hòa hợp và chăm sóc cho những người xung quanh.",
    strengths: ["Có tinh thần trách nhiệm cao", "Trung thành và ấm áp", "Giỏi kết nối và quan tâm đến người khác"],
    weaknesses: ["Quá nhạy cảm với những lời chỉ trích", "Cần sự công nhận từ người khác", "Đôi khi quá lo lắng về địa vị xã hội"],
    development: ["Xây dựng sự tự tin từ bên trong", "Học cách chấp nhận rằng không thể làm hài lòng tất cả mọi người", "Dành thời gian cho sở thích cá nhân"],
  },
  ENFJ: {
    title: "Người Chỉ Dẫn Truyền Cảm Hứng",
    summary: "Bạn là người lôi cuốn, có lòng trắc ẩn và là một nhà lãnh đạo bẩm sinh. Bạn có khả năng truyền cảm hứng và dẫn dắt người khác phát huy hết tiềm năng của họ.",
    strengths: ["Lôi cuốn và truyền cảm hứng", "Đồng cảm và đáng tin cậy", "Có khả năng tổ chức và lãnh đạo"],
    weaknesses: ["Quá lý tưởng hóa", "Hy sinh bản thân quá mức", "Đôi khi quá nhạy cảm"],
    development: ["Học cách chấp nhận con người thật của người khác", "Đặt ra ranh giới và chăm sóc bản thân", "Đối mặt với sự thật dù nó không như ý muốn"],
  },
  ENTJ: {
    title: "Nhà Lãnh Đạo Tài Ba",
    summary: "Bạn là người quyết đoán, có tầm nhìn xa và là một nhà lãnh đạo bẩm sinh. Bạn có khả năng nhìn thấy các cơ hội và tổ chức nguồn lực để đạt được mục tiêu.",
    strengths: ["Hiệu quả và đầy năng lượng", "Tự tin và có ý chí mạnh mẽ", "Tư duy chiến lược và dài hạn"],
    weaknesses: ["Thiếu kiên nhẫn và đôi khi độc đoán", "Không khoan dung với sai lầm", "Khó khăn trong việc xử lý cảm xúc"],
    development: ["Thực hành sự kiên nhẫn và thấu cảm", "Học cách thừa nhận và học hỏi từ sai lầm", "Công nhận đóng góp và cảm xúc của người khác"],
  },
};

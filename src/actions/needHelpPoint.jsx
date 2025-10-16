import fetchData from './utils/fetchData'

const url = import.meta.env.VITE_APP_SERVER_URL + '/need-help'

export const createNeedHelp = async (infoNeedHelp, currentUser, dispatch, setPage) => {
  dispatch({ type: 'START_LOADING' })

  const result = await fetchData({ url, body: infoNeedHelp, token: currentUser?.token }, dispatch)
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The Need Help area has been added successfully'
      }
    })
    dispatch({ type: 'RESET_NEED_HELP_POINT' })
    // Chuyển sang tổng quan
    setPage(0)
    // Mở luôn Popup new needHelpPoint
    dispatch({ type: 'UPDATE_NEED_HELP_POINT', payload: result })
  }
  dispatch({ type: 'END_LOADING' })
}

export const getNeedHelpPoints = async (dispatch) => {
  dispatch({ type: 'START_LOADING' })

  // Fake delay (giả lập như đang gọi API)
  await new Promise((resolve) => setTimeout(resolve, 500))

  const result = [
    {
      "_id": "507f1f77bcf86cd799439011",
      "lng": 106.6963,
      "lat": 10.7769,
      "address": "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
      "price": 20,
      "title": "Cần giúp sửa ống nước tại nhà",
      "description": "Ống nước tại nhà bị rò rỉ, cần thợ sửa gấp trong ngày. Vị trí dễ tiếp cận, đã có sẵn một số dụng cụ cơ bản.",
      "images": [
        "https://example.com/images/leak1.jpg",
        "https://example.com/images/leak2.jpg"
      ],
      "createdBy": "507f191e810c19729de860ea",
      "rating": 4.8,
      "ratingCount": [
        { "ratedById": "507f191e810c19729de860eb", "score": 5, "userType": "helper" },
        { "ratedById": "507f191e810c19729de860ec", "score": 4, "userType": "client" }
      ],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439012",
      "lng": 106.7012,
      "lat": 10.7812,
      "address": "45 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      "price": 15,
      "title": "Cần người dọn dẹp nhà cửa",
      "description": "Cần người dọn dẹp nhà 2 tầng, khoảng 100m2, cần hoàn thành trong 4 giờ. Có cung cấp dụng cụ vệ sinh.",
      "images": [],
      "createdBy": "507f191e810c19729de860ed",
      "rating": 5,
      "ratingCount": [],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439013",
      "lng": 106.6805,
      "lat": 10.7654,
      "address": "78 Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh",
      "price": 30,
      "title": "Cần sửa máy lạnh gấp",
      "description": "Máy lạnh không làm mát, cần kiểm tra và sửa chữa. Máy đã sử dụng 3 năm, cần hoàn thành trong ngày.",
      "images": ["https://example.com/images/ac1.jpg"],
      "createdBy": "507f191e810c19729de860ee",
      "rating": 4.5,
      "ratingCount": [
        { "ratedById": "507f191e810c19729de860ef", "score": 4, "userType": "helper" }
      ],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439014",
      "lng": 106.6721,
      "lat": 10.7890,
      "address": "12 Lý Tự Trọng, Quận 1, TP. Hồ Chí Minh",
      "price": 25,
      "title": "Cần người sơn lại tường",
      "description": "Cần sơn lại tường phòng khách, diện tích khoảng 30m2. Cung cấp sơn, cần người có kinh nghiệm.",
      "images": [
        "https://example.com/images/wall1.jpg",
        "https://example.com/images/wall2.jpg"
      ],
      "createdBy": "507f191e810c19729de860f0",
      "rating": 5,
      "ratingCount": [],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439015",
      "lng": 106.6900,
      "lat": 10.7700,
      "address": "56 Nguyễn Trãi, Quận 5, TP. Hồ Chí Minh",
      "price": 10,
      "title": "Cần người giao hàng gấp",
      "description": "Cần giao 10 gói hàng nhỏ trong nội thành, cần hoàn thành trong 3 giờ. Có xe máy là lợi thế.",
      "images": [],
      "createdBy": "507f191e810c19729de860f1",
      "rating": 4.9,
      "ratingCount": [
        { "ratedById": "507f191e810c19729de860f2", "score": 5, "userType": "client" }
      ],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439016",
      "lng": 106.7050,
      "lat": 10.7923,
      "address": "89 Hai Bà Trưng, Quận 3, TP. Hồ Chí Minh",
      "price": 40,
      "title": "Cần sửa điện tại nhà",
      "description": "Hệ thống điện trong nhà bị chập, cần thợ kiểm tra và sửa chữa. Ưu tiên người có kinh nghiệm lâu năm.",
      "images": ["https://example.com/images/electric1.jpg"],
      "createdBy": "507f191e810c19729de860f3",
      "rating": 4.7,
      "ratingCount": [
        { "ratedById": "507f191e810c19729de860f4", "score": 4, "userType": "helper" },
        { "ratedById": "507f191e810c19729de860f5", "score": 5, "userType": "client" }
      ],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439017",
      "lng": 106.6654,
      "lat": 10.7543,
      "address": "34 Phạm Ngọc Thạch, Quận 3, TP. Hồ Chí Minh",
      "price": 0,
      "title": "Cần người giúp chuyển nhà",
      "description": "Cần 2-3 người hỗ trợ chuyển đồ đạc sang nhà mới, cách 5km. Đồ đạc không quá nặng, cần hoàn thành trong ngày.",
      "images": [],
      "createdBy": "507f191e810c19729de860f6",
      "rating": 5,
      "ratingCount": [],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439018",
      "lng": 106.6789,
      "lat": 10.7876,
      "address": "67 Nguyễn Thị Minh Khai, Quận 1, TP. Hồ Chí Minh",
      "price": 35,
      "title": "Cần lắp đặt kệ bếp",
      "description": "Cần thợ lắp đặt kệ bếp mới, đã có sẵn kệ và dụng cụ. Công việc cần hoàn thành trong 2 giờ.",
      "images": ["https://example.com/images/kitchen1.jpg"],
      "createdBy": "507f191e810c19729de860f7",
      "rating": 4.6,
      "ratingCount": [
        { "ratedById": "507f191e810c19729de860f8", "score": 4, "userType": "helper" }
      ],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439019",
      "lng": 106.6923,
      "lat": 10.7756,
      "address": "23 Lê Đại Hành, Quận 11, TP. Hồ Chí Minh",
      "price": 50,
      "title": "Cần sửa mái nhà",
      "description": "Mái nhà bị dột ở một vài điểm, cần kiểm tra và sửa chữa. Cần người có kinh nghiệm làm việc trên cao.",
      "images": [
        "https://example.com/images/roof1.jpg",
        "https://example.com/images/roof2.jpg"
      ],
      "createdBy": "507f191e810c19729de860f9",
      "rating": 5,
      "ratingCount": [],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd79943901a",
      "lng": 106.6876,
      "lat": 10.7689,
      "address": "90 Cách Mạng Tháng Tám, Quận 3, TP. Hồ Chí Minh",
      "price": 45,
      "title": "Cần lắp đặt hệ thống đèn",
      "description": "Cần lắp đặt hệ thống đèn LED cho phòng khách và bếp. Đã có sẵn đèn, cần người có kinh nghiệm về điện.",
      "images": [],
      "createdBy": "507f191e810c19729de860fa",
      "rating": 4.8,
      "ratingCount": [
        { "ratedById": "507f191e810c19729de860fb", "score": 5, "userType": "client" }
      ],
      "expireAt": "2025-10-21T15:35:00.000Z",
      "createdAt": "2025-10-14T15:35:00.000Z",
      "updatedAt": "2025-10-14T15:35:00.000Z"
    },
    {
    "_id": "507f1f77bcf86cd799439012",
    "lng": 105.8342,
    "lat": 21.0278,
    "address": "56 Phố Huế, Hai Bà Trưng, Hà Nội",
    "price": 15,
    "title": "Giúp chuyển đồ lên tầng 3",
    "description": "Cần người khỏe mạnh hỗ trợ chuyển 5 thùng sách lên tầng 3, có thang bộ.",
    "images": ["https://example.com/images/move1.jpg"],
    "createdBy": "507f191e810c19729de860ed",
    "rating": 4.5,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860ee", "score": 4, "userType": "client" }],
    "expireAt": "2025-10-20T09:00:00.000Z",
    "createdAt": "2025-10-14T09:00:00.000Z",
    "updatedAt": "2025-10-14T09:00:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439013",
    "lng": 105.2684,
    "lat": 20.9714,
    "address": "12 Đường Trần Hưng Đạo, TP. Ninh Bình",
    "price": 30,
    "title": "Sửa máy bơm nước tại nhà",
    "description": "Máy bơm không hoạt động, nghi bị cháy tụ. Cần thợ có kinh nghiệm.",
    "images": ["https://example.com/images/pump1.jpg"],
    "createdBy": "507f191e810c19729de860ef",
    "rating": 4.9,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860f0", "score": 5, "userType": "helper" }],
    "expireAt": "2025-10-19T14:30:00.000Z",
    "createdAt": "2025-10-14T14:30:00.000Z",
    "updatedAt": "2025-10-14T14:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439014",
    "lng": 106.0825,
    "lat": 20.8449,
    "address": "89 Lạch Tray, Quận Ngô Quyền, Hải Phòng",
    "price": 25,
    "title": "Sơn lại cửa gỗ bị bong tróc",
    "description": "Cần người biết sơn PU, chuẩn bị sẵn sơn và giấy nhám.",
    "images": ["https://example.com/images/paint1.jpg"],
    "createdBy": "507f191e810c19729de860f1",
    "rating": 4.2,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860f2", "score": 4, "userType": "client" }],
    "expireAt": "2025-10-22T10:15:00.000Z",
    "createdAt": "2025-10-14T10:15:00.000Z",
    "updatedAt": "2025-10-14T10:15:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439015",
    "lng": 107.5847,
    "lat": 16.4637,
    "address": "34 Nguyễn Huệ, TP. Huế",
    "price": 18,
    "title": "Giúp trông quán tạm thời 2 giờ",
    "description": "Cần người đáng tin cậy trông quán cafe trong lúc đi việc gấp.",
    "images": ["https://example.com/images/shop1.jpg"],
    "createdBy": "507f191e810c19729de860f3",
    "rating": 4.7,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860f4", "score": 5, "userType": "helper" }],
    "expireAt": "2025-10-18T16:00:00.000Z",
    "createdAt": "2025-10-14T16:00:00.000Z",
    "updatedAt": "2025-10-14T16:00:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439016",
    "lng": 108.2022,
    "lat": 16.0544,
    "address": "150 Điện Biên Phủ, Hải Châu, Đà Nẵng",
    "price": 22,
    "title": "Cần giúp lắp kệ treo tường",
    "description": "Đã có khoan và vít, chỉ cần người hỗ trợ đo và lắp.",
    "images": ["https://example.com/images/shelf1.jpg"],
    "createdBy": "507f191e810c19729de860f5",
    "rating": 4.6,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860f6", "score": 4, "userType": "helper" }],
    "expireAt": "2025-10-23T11:45:00.000Z",
    "createdAt": "2025-10-14T11:45:00.000Z",
    "updatedAt": "2025-10-14T11:45:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439017",
    "lng": 109.2194,
    "lat": 12.2388,
    "address": "78 Trần Phú, TP. Nha Trang",
    "price": 35,
    "title": "Thay bóng đèn trần nhà cao",
    "description": "Trần cao 3.5m, cần người có thang hoặc biết cách xử lý an toàn.",
    "images": ["https://example.com/images/light1.jpg"],
    "createdBy": "507f191e810c19729de860f7",
    "rating": 5.0,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860f8", "score": 5, "userType": "client" }],
    "expireAt": "2025-10-21T13:20:00.000Z",
    "createdAt": "2025-10-14T13:20:00.000Z",
    "updatedAt": "2025-10-14T13:20:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439018",
    "lng": 109.1967,
    "lat": 13.7820,
    "address": "21 Lê Lợi, Quy Nhơn, Bình Định",
    "price": 28,
    "title": "Sửa ổ khóa cửa bị kẹt",
    "description": "Ổ khóa bị kẹt, chưa bị gãy chìa. Cần người biết xử lý.",
    "images": ["https://example.com/images/lock1.jpg"],
    "createdBy": "507f191e810c19729de860f9",
    "rating": 4.3,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860fa", "score": 4, "userType": "helper" }],
    "expireAt": "2025-10-24T15:10:00.000Z",
    "createdAt": "2025-10-14T15:10:00.000Z",
    "updatedAt": "2025-10-14T15:10:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439019",
    "lng": 106.3820,
    "lat": 10.3600,
    "address": "45 Nguyễn Huệ, TP. Mỹ Tho, Tiền Giang",
    "price": 19,
    "title": "Cần giúp lắp quạt trần",
    "description": "Quạt mới mua, cần thợ biết nối dây điện đúng kỹ thuật.",
    "images": ["https://example.com/images/fan1.jpg"],
    "createdBy": "507f191e810c19729de860fb",
    "rating": 4.1,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860fc", "score": 4, "userType": "client" }],
    "expireAt": "2025-10-22T08:00:00.000Z",
    "createdAt": "2025-10-14T08:00:00.000Z",
    "updatedAt": "2025-10-14T08:00:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439020",
    "lng": 105.7800,
    "lat": 10.0452,
    "address": "200 30/4 Street, Ninh Kiều, Cần Thơ",
    "price": 32,
    "title": "Cắt cỏ vườn phía sau nhà",
    "description": "Diện tích khoảng 60m2, có máy cắt nhưng cần người thao tác.",
    "images": ["https://example.com/images/grass1.jpg"],
    "createdBy": "507f191e810c19729de860fd",
    "rating": 4.4,
    "ratingCount": [{ "ratedById": "507f191e810c19729de860fe", "score": 4, "userType": "helper" }],
    "expireAt": "2025-10-25T17:50:00.000Z",
    "createdAt": "2025-10-14T17:50:00.000Z",
    "updatedAt": "2025-10-14T17:50:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439021",
    "lng": 105.8342,
    "lat": 21.0278,
    "address": "45 Phố Huế, Quận Hai Bà Trưng, Hà Nội",
    "price": 15,
    "title": "Cần giúp chuyển đồ lên chung cư",
    "description": "Gia đình cần người phụ giúp chuyển thùng carton và đồ gia dụng lên tầng 8. Có thang máy.",
    "images": [
      "https://example.com/images/move1.jpg",
      "https://example.com/images/move2.jpg"
    ],
    "createdBy": "507f191e810c19729de860ed",
    "rating": 4.6,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860ee", "score": 5, "userType": "helper" },
      { "ratedById": "507f191e810c19729de860ef", "score": 4, "userType": "client" }
    ],
    "expireAt": "2025-10-22T10:00:00.000Z",
    "createdAt": "2025-10-14T10:00:00.000Z",
    "updatedAt": "2025-10-14T10:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439022",
    "lng": 108.2208,
    "lat": 16.0678,
    "address": "12 Trần Phú, Hải Châu, Đà Nẵng",
    "price": 25,
    "title": "Cần dọn quán cà phê buổi sáng",
    "description": "Quán cà phê cần người phụ lau dọn, sắp xếp bàn ghế từ 6h đến 8h sáng.",
    "images": [
      "https://example.com/images/cafe1.jpg"
    ],
    "createdBy": "507f191e810c19729de860f1",
    "rating": 4.7,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860f2", "score": 5, "userType": "client" }
    ],
    "expireAt": "2025-10-23T06:00:00.000Z",
    "createdAt": "2025-10-14T06:00:00.000Z",
    "updatedAt": "2025-10-14T06:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439023",
    "lng": 106.6602,
    "lat": 10.7626,
    "address": "98 Nguyễn Trãi, Quận 5, TP. Hồ Chí Minh",
    "price": 30,
    "title": "Cần thợ sửa dây điện bị chập",
    "description": "Cửa hàng quần áo bị chập điện khu vực công tắc, cần thợ sửa nhanh và an toàn.",
    "images": [
      "https://example.com/images/electric1.jpg"
    ],
    "createdBy": "507f191e810c19729de860f3",
    "rating": 4.9,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860f4", "score": 5, "userType": "helper" },
      { "ratedById": "507f191e810c19729de860f5", "score": 5, "userType": "client" }
    ],
    "expireAt": "2025-10-21T12:00:00.000Z",
    "createdAt": "2025-10-14T12:00:00.000Z",
    "updatedAt": "2025-10-14T12:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439024",
    "lng": 105.4020,
    "lat": 18.6796,
    "address": "21 Nguyễn Sỹ Sách, TP. Vinh, Nghệ An",
    "price": 18,
    "title": "Hỗ trợ thu hoạch lúa theo giờ",
    "description": "Gia đình cần 2 người phụ thu hoạch lúa trong 1 buổi sáng. Đã chuẩn bị dụng cụ.",
    "images": [
      "https://example.com/images/farm1.jpg"
    ],
    "createdBy": "507f191e810c19729de860f6",
    "rating": 4.5,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860f7", "score": 4, "userType": "client" }
    ],
    "expireAt": "2025-10-25T07:00:00.000Z",
    "createdAt": "2025-10-14T07:00:00.000Z",
    "updatedAt": "2025-10-14T07:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439025",
    "lng": 107.5860,
    "lat": 16.4637,
    "address": "5 Hùng Vương, TP. Huế",
    "price": 22,
    "title": "Cần người phụ bán hàng ở cửa hàng đặc sản",
    "description": "Cửa hàng cần người đứng bán giúp vào buổi chiều, hỗ trợ giới thiệu sản phẩm.",
    "images": [
      "https://example.com/images/shop1.jpg"
    ],
    "createdBy": "507f191e810c19729de860f8",
    "rating": 4.3,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860f9", "score": 4, "userType": "helper" }
    ],
    "expireAt": "2025-10-24T15:00:00.000Z",
    "createdAt": "2025-10-14T15:00:00.000Z",
    "updatedAt": "2025-10-14T15:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439026",
    "lng": 105.2684,
    "lat": 9.7794,
    "address": "7 Trần Hưng Đạo, TP. Cần Thơ",
    "price": 17,
    "title": "Cần người trông coi quán net buổi tối",
    "description": "Quán net nhỏ cần người trông giúp từ 20h đến 23h, chỉ cần ngồi quản lý.",
    "images": [
      "https://example.com/images/net1.jpg"
    ],
    "createdBy": "507f191e810c19729de860fa",
    "rating": 4.4,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860fb", "score": 4, "userType": "client" }
    ],
    "expireAt": "2025-10-26T20:00:00.000Z",
    "createdAt": "2025-10-14T20:00:00.000Z",
    "updatedAt": "2025-10-14T20:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439027",
    "lng": 104.8999,
    "lat": 21.0285,
    "address": "Thị trấn Sa Pa, Lào Cai",
    "price": 28,
    "title": "Tìm người phụ dọn Homestay cho khách mới",
    "description": "Homestay cần dọn phòng, thay drap, hút bụi trước khi khách đến. Có dụng cụ.",
    "images": [
      "https://example.com/images/homestay1.jpg"
    ],
    "createdBy": "507f191e810c19729de860fc",
    "rating": 4.9,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860fd", "score": 5, "userType": "helper" }
    ],
    "expireAt": "2025-10-27T09:00:00.000Z",
    "createdAt": "2025-10-14T09:00:00.000Z",
    "updatedAt": "2025-10-14T09:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439028",
    "lng": 109.1967,
    "lat": 12.2388,
    "address": "Bến tàu cá, Nha Trang, Khánh Hòa",
    "price": 35,
    "title": "Cần thợ phụ sửa máy tàu đánh cá",
    "description": "Tàu cá cần kiểm tra máy nổ, ưu tiên người có kinh nghiệm cơ khí.",
    "images": [
      "https://example.com/images/boat1.jpg"
    ],
    "createdBy": "507f191e810c19729de860fe",
    "rating": 4.2,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de860ff", "score": 4, "userType": "client" }
    ],
    "expireAt": "2025-10-21T14:00:00.000Z",
    "createdAt": "2025-10-14T14:00:00.000Z",
    "updatedAt": "2025-10-14T14:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439029",
    "lng": 106.3833,
    "lat": 20.8449,
    "address": "Chợ Hàng, Hải Phòng",
    "price": 14,
    "title": "Cần người phụ bốc hàng rau củ buổi sớm",
    "description": "Xe chở rau đến lúc 4h sáng, cần người phụ bốc xếp vào sạp.",
    "images": [
      "https://example.com/images/market1.jpg"
    ],
    "createdBy": "507f191e810c19729de86100",
    "rating": 4.0,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de86101", "score": 4, "userType": "helper" }
    ],
    "expireAt": "2025-10-22T04:00:00.000Z",
    "createdAt": "2025-10-14T04:00:00.000Z",
    "updatedAt": "2025-10-14T04:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439030",
    "lng": 108.3398,
    "lat": 14.3514,
    "address": "Buôn Ma Thuột, Đắk Lắk",
    "price": 19,
    "title": "Cần người phụ hái cà phê tại rẫy",
    "description": "Rẫy cà phê đang vào mùa, cần thêm người hái thủ công. Bao ăn trưa.",
    "images": [
      "https://example.com/images/coffee1.jpg"
    ],
    "createdBy": "507f191e810c19729de86102",
    "rating": 4.7,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de86103", "score": 5, "userType": "client" }
    ],
    "expireAt": "2025-10-28T06:00:00.000Z",
    "createdAt": "2025-10-14T06:00:00.000Z",
    "updatedAt": "2025-10-14T06:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439031",
    "lng": 107.0820,
    "lat": 10.3459,
    "address": "Khu công nghiệp Nhơn Trạch, Đồng Nai",
    "price": 26,
    "title": "Cần thợ phụ sửa máy lạnh công nghiệp",
    "description": "Xưởng sản xuất cần người hỗ trợ kiểm tra máy lạnh, ưu tiên có kinh nghiệm thợ điện lạnh.",
    "images": ["https://example.com/images/acfix1.jpg"],
    "createdBy": "507f191e810c19729de86104",
    "rating": 4.8,
    "ratingCount": [
      { "ratedById": "507f191e810c19729de86105", "score": 5, "userType": "helper" }
    ],
    "expireAt": "2025-10-22T13:00:00.000Z",
    "createdAt": "2025-10-14T13:00:00.000Z",
    "updatedAt": "2025-10-14T13:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439032",
    "lng": 102.9732,
    "lat": 11.5280,
    "address": "Phú Quốc, Kiên Giang",
    "price": 32,
    "title": "Tìm người phụ làm BBQ cho khách du lịch",
    "description": "Resort cần người phụ nướng BBQ vào buổi tối, hướng dẫn chi tiết, dễ làm.",
    "images": ["https://example.com/images/bbq1.jpg"],
    "createdBy": "507f191e810c19729de86106",
    "rating": 4.9,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86107", "score": 5, "userType": "client" }],
    "expireAt": "2025-10-23T19:00:00.000Z",
    "createdAt": "2025-10-14T19:00:00.000Z",
    "updatedAt": "2025-10-14T19:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439033",
    "lng": 105.6932,
    "lat": 21.3245,
    "address": "Thái Nguyên, Khu phố Chè",
    "price": 16,
    "title": "Hái chè tại nông trại cuối tuần",
    "description": "Nông trại chè cần người phụ hái trong 4 tiếng buổi sáng. Bao nước uống.",
    "images": ["https://example.com/images/tea1.jpg"],
    "createdBy": "507f191e810c19729de86108",
    "rating": 4.3,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86109", "score": 4, "userType": "helper" }],
    "expireAt": "2025-10-26T07:00:00.000Z",
    "createdAt": "2025-10-14T07:00:00.000Z",
    "updatedAt": "2025-10-14T07:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439034",
    "lng": 106.3370,
    "lat": 11.5325,
    "address": "Bình Dương, Thị xã Dĩ An",
    "price": 21,
    "title": "Phụ vệ sinh kho hàng",
    "description": "Kho hàng cần người quét dọn, sắp hàng hóa gọn gàng. Có xe đẩy hỗ trợ.",
    "images": ["https://example.com/images/warehouse1.jpg"],
    "createdBy": "507f191e810c19729de86110",
    "rating": 4.2,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86111", "score": 4, "userType": "client" }],
    "expireAt": "2025-10-21T09:00:00.000Z",
    "createdAt": "2025-10-14T09:00:00.000Z",
    "updatedAt": "2025-10-14T09:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439035",
    "lng": 108.0033,
    "lat": 13.9712,
    "address": "Gia Lai, Pleiku Center",
    "price": 24,
    "title": "Giúp lắp đặt biển hiệu cửa hàng",
    "description": "Cửa hàng mới khai trương cần người phụ treo bảng hiệu, đã có thang và dụng cụ.",
    "images": ["https://example.com/images/sign1.jpg"],
    "createdBy": "507f191e810c19729de86112",
    "rating": 4.6,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86113", "score": 5, "userType": "helper" }],
    "expireAt": "2025-10-22T15:00:00.000Z",
    "createdAt": "2025-10-14T15:00:00.000Z",
    "updatedAt": "2025-10-14T15:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439036",
    "lng": 105.9750,
    "lat": 20.2689,
    "address": "Ninh Bình, Tràng An",
    "price": 30,
    "title": "Hỗ trợ chèo đò du lịch",
    "description": "Khu du lịch cần phụ chèo đò hỗ trợ khách, sẽ được hướng dẫn trước.",
    "images": ["https://example.com/images/boat2.jpg"],
    "createdBy": "507f191e810c19729de86114",
    "rating": 4.8,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86115", "score": 5, "userType": "client" }],
    "expireAt": "2025-10-23T08:00:00.000Z",
    "createdAt": "2025-10-14T08:00:00.000Z",
    "updatedAt": "2025-10-14T08:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439037",
    "lng": 103.9725,
    "lat": 22.4003,
    "address": "Hà Giang, Cổng Trời Quản Bạ",
    "price": 34,
    "title": "Phụ dẫn tour trekking",
    "description": "Nhóm trekking cần thêm người dẫn đường phụ, ưu tiên quen địa hình.",
    "images": ["https://example.com/images/trek1.jpg"],
    "createdBy": "507f191e810c19729de86116",
    "rating": 4.9,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86117", "score": 5, "userType": "helper" }],
    "expireAt": "2025-10-27T05:00:00.000Z",
    "createdAt": "2025-10-14T05:00:00.000Z",
    "updatedAt": "2025-10-14T05:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439038",
    "lng": 106.0779,
    "lat": 11.5349,
    "address": "Tây Ninh, Khu Núi Bà Đen",
    "price": 27,
    "title": "Cần chạy bàn lễ hội",
    "description": "Sự kiện tại khu du lịch cần người chạy bàn phục vụ thức ăn nhanh.",
    "images": ["https://example.com/images/event1.jpg"],
    "createdBy": "507f191e810c19729de86118",
    "rating": 4.4,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86119", "score": 4, "userType": "client" }],
    "expireAt": "2025-10-21T11:00:00.000Z",
    "createdAt": "2025-10-14T11:00:00.000Z",
    "updatedAt": "2025-10-14T11:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439039",
    "lng": 105.0847,
    "lat": 21.7383,
    "address": "Tuyên Quang, Chợ đêm",
    "price": 13,
    "title": "Cần phụ bán hàng ăn vặt",
    "description": "Quầy bánh tráng trộn cần người ra món và thu tiền.",
    "images": ["https://example.com/images/food1.jpg"],
    "createdBy": "507f191e810c19729de86120",
    "rating": 4.1,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86121", "score": 4, "userType": "helper" }],
    "expireAt": "2025-10-24T18:00:00.000Z",
    "createdAt": "2025-10-14T18:00:00.000Z",
    "updatedAt": "2025-10-14T18:00:00.000Z"
  },
  {
    "_id": "64af1f77bcf86cd799439040",
    "lng": 104.4466,
    "lat": 20.8410,
    "address": "Sơn La, Khu chợ nông sản",
    "price": 20,
    "title": "Khuân vác bao ngô tại chợ",
    "description": "Bao ngô nặng ~20kg, cần người khuân từ xe xuống kho, làm nhanh trong 2 tiếng.",
    "images": ["https://example.com/images/corn1.jpg"],
    "createdBy": "507f191e810c19729de86122",
    "rating": 4.5,
    "ratingCount": [{ "ratedById": "507f191e810c19729de86123", "score": 5, "userType": "client" }],
    "expireAt": "2025-10-22T07:00:00.000Z",
    "createdAt": "2025-10-14T07:00:00.000Z",
    "updatedAt": "2025-10-14T07:00:00.000Z"
  },
  {
  "_id": "507f1f77bcf86cd799439021",
  "lng": 105.8048,
  "lat": 21.0285,
  "address": "456 Phố Huế, Quận Hai Bà Trưng, Hà Nội",
  "price": 30,
  "title": "Giúp chuyển đồ lên tầng 3",
  "description": "Cần 1-2 người hỗ trợ chuyển các thùng hàng nhỏ lên tầng 3, không có thang máy.",
  "images": [
    "https://example.com/images/move1.jpg",
    "https://example.com/images/move2.jpg"
  ],
  "createdBy": "507f191e810c19729de860f1",
  "rating": 4.6,
  "ratingCount": [
    { "ratedById": "507f191e810c19729de860f2", "score": 5, "userType": "helper" },
    { "ratedById": "507f191e810c19729de860f3", "score": 4, "userType": "client" }
  ],
  "expireAt": "2025-10-23T10:00:00.000Z",
  "createdAt": "2025-10-14T09:50:00.000Z",
  "updatedAt": "2025-10-14T09:50:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439022",
  "lng": 108.2022,
  "lat": 16.0471,
  "address": "12 Bạch Đằng, Quận Hải Châu, Đà Nẵng",
  "price": 15,
  "title": "Cần người trông quán cafe buổi tối",
  "description": "Quán cafe nhỏ cần người hỗ trợ trông quán từ 18h đến 21h, công việc nhẹ nhàng.",
  "images": [
    "https://example.com/images/cafe1.jpg",
    "https://example.com/images/cafe2.jpg"
  ],
  "createdBy": "507f191e810c19729de860f4",
  "rating": 4.9,
  "ratingCount": [
    { "ratedById": "507f191e810c19729de860f5", "score": 5, "userType": "client" },
    { "ratedById": "507f191e810c19729de860f6", "score": 5, "userType": "helper" }
  ],
  "expireAt": "2025-10-20T19:00:00.000Z",
  "createdAt": "2025-10-14T08:10:00.000Z",
  "updatedAt": "2025-10-14T08:10:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439023",
  "lng": 105.2684,
  "lat": 20.9711,
  "address": "78 Đại Lộ Lê Lợi, TP Thanh Hóa",
  "price": 10,
  "title": "Nhờ mua thuốc hộ",
  "description": "Người lớn tuổi không tiện đi lại, cần người mua thuốc tại hiệu thuốc gần nhà.",
  "images": [
    "https://example.com/images/medicine1.jpg"
  ],
  "createdBy": "507f191e810c19729de860f7",
  "rating": 4.5,
  "ratingCount": [
    { "ratedById": "507f191e810c19729de860f8", "score": 4, "userType": "client" },
    { "ratedById": "507f191e810c19729de860f9", "score": 5, "userType": "helper" }
  ],
  "expireAt": "2025-10-19T14:30:00.000Z",
  "createdAt": "2025-10-14T12:20:00.000Z",
  "updatedAt": "2025-10-14T12:20:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439024",
  "lng": 106.6602,
  "lat": 10.7626,
  "address": "99 Nguyễn Trãi, Quận 5, TP. Hồ Chí Minh",
  "price": 25,
  "title": "Lắp đặt kệ sách",
  "description": "Cần người có dụng cụ cơ bản hỗ trợ lắp kệ sách gỗ treo tường.",
  "images": [
    "https://example.com/images/shelf1.jpg",
    "https://example.com/images/shelf2.jpg"
  ],
  "createdBy": "507f191e810c19729de860fa",
  "rating": 4.7,
  "ratingCount": [
    { "ratedById": "507f191e810c19729de860fb", "score": 5, "userType": "helper" }
  ],
  "expireAt": "2025-10-22T16:00:00.000Z",
  "createdAt": "2025-10-14T13:00:00.000Z",
  "updatedAt": "2025-10-14T13:00:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439025",
  "lng": 107.5847,
  "lat": 16.4637,
  "address": "35 Lý Thường Kiệt, TP Huế",
  "price": 12,
  "title": "Phát tờ rơi buổi sáng",
  "description": "Cần 2 bạn sinh viên phát tờ rơi tại ngã tư từ 7h đến 9h.",
  "images": [
    "https://example.com/images/flyer1.jpg"
  ],
  "createdBy": "507f191e810c19729de860fc",
  "rating": 4.3,
  "ratingCount": [
    { "ratedById": "507f191e810c19729de860fd", "score": 4, "userType": "client" }
  ],
  "expireAt": "2025-10-18T07:00:00.000Z",
  "createdAt": "2025-10-14T11:00:00.000Z",
  "updatedAt": "2025-10-14T11:00:00.000Z"
},
{
  "_id": "507f1f77bcf86cd79943901b",
  "lng": 105.1562,
  "lat": 21.0045,
  "address": "Thị trấn Đồng Văn, Hà Giang",
  "price": 0,
  "title": "Hỗ trợ sửa mái nhà bị tốc do gió mạnh",
  "description": "Gió to làm tốc mái nhà, cần người hỗ trợ lợp lại mái tôn. Khu vực vùng núi khó đi lại, ưu tiên người có sức khỏe.",
  "images": [],
  "createdBy": "507f191e810c19729de86100",
  "rating": 5,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd79943901c",
  "lng": 106.6800,
  "lat": 20.8449,
  "address": "Cảng Đình Vũ, Hải Phòng",
  "price": 50,
  "title": "Cần người bốc xếp hàng hóa tại cảng",
  "description": "Container cập bến, cần người hỗ trợ bốc xếp hàng hóa nhẹ. Làm việc trong 3 giờ, ưu tiên người quen việc cảng.",
  "images": ["https://example.com/images/port1.jpg"],
  "createdBy": "507f191e810c19729de86101",
  "rating": 4.7,
  "ratingCount": [
    { "ratedById": "507f191e810c19729de86102", "score": 4, "userType": "client" }
  ],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd79943901d",
  "lng": 103.9693,
  "lat": 22.3381,
  "address": "Chợ Bắc Hà, Lào Cai",
  "price": 15,
  "title": "Cần giúp vận chuyển hàng từ chợ về bản",
  "description": "Mua đồ ở chợ, cần người giúp mang về bản cách 7km. Đường dốc vừa phải, có xe máy càng tốt.",
  "images": [],
  "createdBy": "507f191e810c19729de86103",
  "rating": 5,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd79943901e",
  "lng": 106.1656,
  "lat": 20.4160,
  "address": "Xã Hải Hậu, Nam Định",
  "price": 10,
  "title": "Cần người gặt lúa giúp gia đình",
  "description": "Mùa gặt đến, gia đình cần thêm người hỗ trợ gặt 5 sào lúa. Có cơm trưa và nước uống.",
  "images": [],
  "createdBy": "507f191e810c19729de86104",
  "rating": 4.9,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd79943901f",
  "lng": 108.2477,
  "lat": 15.8794,
  "address": "Phố cổ Hội An, Quảng Nam",
  "price": 25,
  "title": "Cần người hỗ trợ dọn quán trước giờ mở cửa",
  "description": "Quán cà phê cần người lau dọn và set up bàn ghế trước 7h sáng. Công việc nhẹ, 2 tiếng là xong.",
  "images": ["https://example.com/images/hoian1.jpg"],
  "createdBy": "507f191e810c19729de86105",
  "rating": 4.8,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439020",
  "lng": 109.2194,
  "lat": 13.7820,
  "address": "Eo Gió, Quy Nhơn, Bình Định",
  "price": 30,
  "title": "Cần hỗ trợ lắp đặt khu check-in cho du khách",
  "description": "Khu du lịch đang set up điểm chụp ảnh mới, cần 2 người hỗ trợ dựng khung gỗ và trang trí.",
  "images": [],
  "createdBy": "507f191e810c19729de86106",
  "rating": 4.8,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439021",
  "lng": 105.6933,
  "lat": 18.6736,
  "address": "Xã Nghi Lộc, Nghệ An",
  "price": 12,
  "title": "Cần người phụ xây chuồng trại chăn nuôi",
  "description": "Gia đình đang làm chuồng nuôi lợn, cần thêm người trộn vữa và phụ khuân gạch. Khoảng 1 ngày làm.",
  "images": [],
  "createdBy": "507f191e810c19729de86107",
  "rating": 5,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439022",
  "lng": 108.0322,
  "lat": 13.9831,
  "address": "TP Pleiku, Gia Lai",
  "price": 20,
  "title": "Cần người sửa xe máy tại chỗ",
  "description": "Xe máy hỏng giữa đường, cần người có dụng cụ sửa nhanh. Chủ xe đang chờ tại chỗ.",
  "images": [],
  "createdBy": "507f191e810c19729de86108",
  "rating": 4.6,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439023",
  "lng": 105.7689,
  "lat": 10.0452,
  "address": "Cái Răng, TP Cần Thơ",
  "price": 18,
  "title": "Cần người hỗ trợ thu hoạch trái cây",
  "description": "Vườn cây đang vào mùa, cần người hái trái và phân loại. Có ghe đưa đón tận nơi.",
  "images": [],
  "createdBy": "507f191e810c19729de86109",
  "rating": 5,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
  "_id": "507f1f77bcf86cd799439024",
  "lng": 104.0035,
  "lat": 10.2270,
  "address": "Dương Đông, Phú Quốc, Kiên Giang",
  "price": 40,
  "title": "Cần người lặn biển kiểm tra lồng nuôi cá",
  "description": "Lồng cá ngoài biển cần kiểm tra và vệ sinh rong rêu. Cần thợ biết bơi lặn.",
  "images": ["https://example.com/images/fishfarm1.jpg"],
  "createdBy": "507f191e810c19729de86110",
  "rating": 4.9,
  "ratingCount": [],
  "expireAt": "2025-10-22T15:35:00.000Z",
  "createdAt": "2025-10-14T15:35:00.000Z",
  "updatedAt": "2025-10-14T15:35:00.000Z"
},
{
    "_id": "507f1f77bcf86cd799439030",
    "lng": 103.9692,
    "lat": 22.3964,
    "address": "Thị xã Sa Pa, Lào Cai",
    "price": 25,
    "title": "Hỗ trợ vận chuyển hàng lên bản vùng cao",
    "description": "Cần người khỏe hỗ trợ vận chuyển bao gạo và nhu yếu phẩm lên bản Cát Cát. Địa hình dốc, cần người có sức khỏe.",
    "images": ["https://example.com/images/sapa1.jpg"],
    "createdBy": "507f191e810c19729de86120",
    "rating": 4.7,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439031",
    "lng": 106.6584,
    "lat": 20.8449,
    "address": "Thành phố Hải Phòng",
    "price": 18,
    "title": "Cần người sửa điện kho bãi gần cảng",
    "description": "Kho chứa hàng gần cảng Hải Phòng bị chập điện, cần thợ có kinh nghiệm sửa chữa điện công nghiệp.",
    "images": ["https://example.com/images/haiphong1.jpg"],
    "createdBy": "507f191e810c19729de86121",
    "rating": 4.6,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439032",
    "lng": 108.2034,
    "lat": 16.0544,
    "address": "Quận Sơn Trà, Đà Nẵng",
    "price": 22,
    "title": "Cần người dọn rác bãi biển sáng sớm",
    "description": "Bãi biển Mỹ Khê cần người hỗ trợ dọn vệ sinh mỗi sáng, công việc nhẹ, ưu tiên sinh viên.",
    "images": ["https://example.com/images/danang1.jpg"],
    "createdBy": "507f191e810c19729de86122",
    "rating": 4.5,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439033",
    "lng": 109.1967,
    "lat": 12.2388,
    "address": "Thành phố Nha Trang, Khánh Hòa",
    "price": 28,
    "title": "Cần người lắp đặt wifi cho homestay ven biển",
    "description": "Homestay khu An Viên cần lắp wifi, đi dây và cấu hình modem. Yêu cầu biết kỹ thuật cơ bản.",
    "images": ["https://example.com/images/nhatrang1.jpg"],
    "createdBy": "507f191e810c19729de86123",
    "rating": 4.8,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439034",
    "lng": 107.5848,
    "lat": 16.4637,
    "address": "Thành phố Huế, Thừa Thiên Huế",
    "price": 19,
    "title": "Hỗ trợ sơn lại cổng nhà rêu phong",
    "description": "Cổng nhà cổ ở Huế bị rêu phong, cần người biết sơn sửa lại giữ nguyên vẻ cổ kính.",
    "images": ["https://example.com/images/hue1.jpg"],
    "createdBy": "507f191e810c19729de86124",
    "rating": 4.4,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439035",
    "lng": 106.8231,
    "lat": 11.9404,
    "address": "Thành phố Đà Lạt, Lâm Đồng",
    "price": 26,
    "title": "Cần người thu hoạch rau tại trang trại",
    "description": "Trang trại rau ở Đà Lạt cần người phụ thu hoạch sáng sớm, trời lạnh nên chuẩn bị áo ấm.",
    "images": ["https://example.com/images/dalat1.jpg"],
    "createdBy": "507f191e810c19729de86125",
    "rating": 4.9,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439036",
    "lng": 106.3459,
    "lat": 20.9403,
    "address": "Nam Định City, Nam Định",
    "price": 17,
    "title": "Cần người sửa máy bơm nước ruộng",
    "description": "Máy bơm nước ở cánh đồng Ý Yên bị hỏng, cần người biết cơ khí hỗ trợ sửa chữa.",
    "images": ["https://example.com/images/namdinh1.jpg"],
    "createdBy": "507f191e810c19729de86126",
    "rating": 4.6,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439037",
    "lng": 106.8832,
    "lat": 10.9804,
    "address": "Thành phố Biên Hòa, Đồng Nai",
    "price": 23,
    "title": "Cần người dọn kho xưởng",
    "description": "Kho xưởng gần KCN Amata cần người hỗ trợ phân loại hàng hóa, công việc tương đối nặng.",
    "images": ["https://example.com/images/dongnai1.jpg"],
    "createdBy": "507f191e810c19729de86127",
    "rating": 4.7,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439038",
    "lng": 105.7800,
    "lat": 21.0228,
    "address": "Ba Vì, Hà Nội",
    "price": 21,
    "title": "Hỗ trợ dựng lều trại sự kiện ngoại khóa",
    "description": "Khu du lịch Ba Vì cần người phụ dựng trại và setup âm thanh cho đoàn học sinh.",
    "images": ["https://example.com/images/bavi1.jpg"],
    "createdBy": "507f191e810c19729de86128",
    "rating": 4.5,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439039",
    "lng": 104.9069,
    "lat": 21.5942,
    "address": "Thành phố Yên Bái, Yên Bái",
    "price": 18,
    "title": "Cần người phát quang cỏ ven đường đồi",
    "description": "Đường đồi xã Văn Chấn bị cỏ mọc cao, cần người hỗ trợ phát quang để xe đi lại dễ dàng.",
    "images": ["https://example.com/images/yenbai1.jpg"],
    "createdBy": "507f191e810c19729de86129",
    "rating": 4.3,
    "ratingCount": [],
    "expireAt": "2025-10-22T15:35:00.000Z",
    "createdAt": "2025-10-14T15:35:00.000Z",
    "updatedAt": "2025-10-14T15:35:00.000Z"
  }
]


  // ✅ Cập nhật data vào global state
  dispatch({ type: 'UPDATE_NEED_HELP_POINTS', payload: result })

  dispatch({ type: 'END_LOADING' })
}

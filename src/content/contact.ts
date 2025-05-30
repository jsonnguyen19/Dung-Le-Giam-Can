export const contactInfo = {
  owner: {
    name: "Lê Thị Thanh Dung",
    phone: "0937221892",
    email: "halongoitoiyeuem@gmail.com",
  },
  social: {
    tiktok: {
      username: "shop dung lê 5",
      url: "https://www.tiktok.com/@shopdungle5",
      image: "/images/social/zalo.png",
    },
    zalo: {
      name: "shop dung lê giảm cân",
      url: "https://zalo.me/0937221892",
      image: "/images/social/zalo.png",
    },
    youtube: {
      url: "https://youtube.com/@DungLeGiamCan",
      image: "/images/social/youtube.png",
    },
  },
  businessHours: {
    weekday: "8:00 - 21:00",
    weekend: "9:00 - 18:00",
  },
  address: "Thành phố Hồ Chí Minh",
};

export const socialLinks = [
  {
    name: "TikTok",
    icon: "📱",
    url: contactInfo.social.tiktok.url,
  },
  {
    name: "Zalo",
    icon: "💬",
    url: contactInfo.social.zalo.url,
  },
  {
    name: "Gọi điện",
    icon: "☎️",
    url: `tel:${contactInfo.owner.phone}`,
  },
];

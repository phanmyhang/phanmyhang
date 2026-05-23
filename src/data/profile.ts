// Dữ liệu hồ sơ — chỉnh nội dung tại đây, không cần đụng vào layout.

export interface SocialIcon {
  /** Tên mạng xã hội, dùng cho aria-label */
  name: string;
  /** Đường dẫn liên kết */
  href: string;
  /** Khóa icon: 'instagram' | 'tiktok' | 'facebook' */
  icon: 'instagram' | 'tiktok' | 'facebook';
}

export interface LinkCard {
  /** Tiêu đề hiển thị trên thẻ */
  title: string;
  /** Đường dẫn khi nhấn vào thẻ */
  href: string;
  /** Ảnh thumbnail bên trái thẻ (đặt trong /public) */
  thumbnail: string;
}

export interface Profile {
  /** Tên hiển thị (dùng cho <title> và avatar) */
  name: string;
  /** Tiêu đề lớn */
  title: string;
  /** Mô tả nhiều dòng — mỗi phần tử là một dòng */
  descriptionLines: string[];
  /** Ảnh đại diện (đặt trong /public) */
  avatar: string;
  /** Icon mạng xã hội xếp ngang dưới mô tả */
  socials: SocialIcon[];
  /** Các thẻ liên kết chính */
  links: LinkCard[];
}

export const profile: Profile = {
  name: 'Mỹ Hằng Fit',
  title: 'Mỹ Hằng Fit',
  descriptionLines: [
    'PT 1:1 Online & Offline',
    'Giảm mỡ – siết dáng – tăng cơ',
    'Theo sát ăn uống & form tập',
    '📩 Nhắn mình tư vấn nhé',
  ],
  avatar: '/images/avatar.jpeg',
  socials: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/coachhang.fit',
      icon: 'instagram',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@hangditapday',
      icon: 'tiktok',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/18WacTbv38',
      icon: 'facebook',
    },
  ],
  links: [
    {
      title: 'Hằng Mỹ Fit (@coachhang.fit) • Instagram photos and videos',
      href: 'https://www.instagram.com/coachhang.fit',
      thumbnail: '/images/instagram.jpeg',
    },
    {
      title: 'Hằng đi tập đây!!!',
      href: 'https://www.tiktok.com/@hangditapday',
      thumbnail: '/images/tiktok.jpeg',
    },
    {
      title: 'Mỹ Hằng Fit',
      href: 'https://www.facebook.com/share/18WacTbv38',
      thumbnail: '/images/facebook.jpeg',
    },
  ],
};

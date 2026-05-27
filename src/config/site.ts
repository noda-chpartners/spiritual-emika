export const siteConfig = {
  /** サイト・店舗名 */
  name: "神降ろし鑑定エミカ",
  /** 鑑定師名 */
  owner: "江美香",
  /** デフォルトのページタイトル（トップページ向け） */
  title: "神降ろし鑑定エミカ｜愛知・東郷町の神降ろし鑑定 江美香",
  /** meta description（120〜160文字程度） */
  description:
    "愛知県東郷町で神降ろし鑑定を行う江美香の公式サイト。恋愛・人間関係・仕事・人生の流れなど、神様から降ろされた言葉をそのままお伝えします。対面・オンライン鑑定、法人鑑定にも対応。",
  /** 本番URL（公開時に実際のドメインへ変更してください） */
  url: "https://example.com",
  /** OGP画像（public 配下。1200×630px 推奨） */
  ogImage: "/ogp.png",
  ogImageAlt: "神降ろし鑑定エミカ 江美香",
  lang: "ja",
  locale: "ja_JP",
  /** SEOキーワード */
  keywords: [
    "神降ろし鑑定",
    "神降ろし",
    "スピリチュアル",
    "占い",
    "鑑定",
    "江美香",
    "エミカ",
    "愛知",
    "東郷町",
    "愛知郡",
    "対面鑑定",
    "オンライン鑑定",
    "恋愛相談",
    "人間関係",
    "法人鑑定",
  ],
  /** テーマカラー（ブラウザUI・OGP周辺） */
  themeColor: "#faf4e4",
  /** 店舗・連絡先情報（構造化データ・フッター等で利用） */
  business: {
    name: "神降ろし鑑定エミカ",
    phone: "090-1786-2822",
    phoneInternational: "+81-90-1786-2822",
    address: {
      postalCode: "470-0162",
      region: "愛知県",
      locality: "愛知郡東郷町",
      street: "和合知々釜167-1",
      full: "〒470-0162 愛知県愛知郡東郷町和合知々釜167-1",
    },
    nearestStation: "地下鉄赤池駅",
    openingHours: "10:00-20:00",
    openingHoursNote: "平日・土日祝",
  },
  /** 予約・問い合わせ */
  contact: {
    formUrl: "https://ssl.form-mailer.jp/fms/2fc037a7379554",
    tel: "tel:09017862822",
  },
  /** SNS（未設定の場合は空文字のまま） */
  sns: {
    instagram: "https://www.instagram.com/アカウント名/",
    line: "https://lin.ee/xxxxxxx",
    /** X（Twitter）アカウントの @ハンドル（例: "@emika"）。未使用なら空文字 */
    x: "",
  },
  /** Twitter Card 設定 */
  twitter: {
    card: "summary_large_image" as const,
    /** @ハンドル（site 用）。未使用なら空文字 */
    site: "",
  },
} as const;

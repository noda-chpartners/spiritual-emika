export const siteConfig = {
  /** サイト・店舗名 */
  name: "神降ろし鑑定江美香",
  /** 鑑定師名 */
  owner: "江美香",
  /** デフォルトのページタイトル（トップページ向け） */
  title: "神降ろし鑑定 江美香｜愛知県東郷町・対面／オンライン鑑定",
  /** meta description（120〜160文字程度） */
  description:
    "愛知県愛知郡東郷町の「神降ろし鑑定 江美香」。恋愛・人間関係・仕事・人生の流れについてご相談を承ります。対面鑑定、LINEビデオ通話によるオンライン鑑定、法人・企業鑑定に対応。鑑定料金・アクセス・予約方法をご案内しています。",
  /** canonical・OGP・robots・サイトマップ共通の本番URL */
  url: "https://spiritual-emika.pages.dev/",
  /** OGP画像はSeo.astroで既存ロゴから生成 */
  ogImageAlt: "神降ろし鑑定 江美香のロゴ",
  lang: "ja",
  locale: "ja_JP",
  /** テーマカラー（ブラウザUI・OGP周辺） */
  themeColor: "#faf4e4",
  /** 店舗・連絡先情報（構造化データ・フッター等で利用） */
  business: {
    name: "神降ろし鑑定江美香",
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
    openingHoursNote: "平日・土日祝",
    opens: "10:00",
    closes: "20:00",
    closedDays: "不定休。詳細はお問い合わせにてご確認ください。",
  },
  /** 予約・問い合わせ */
  contact: {
    formUrl: "https://ssl.form-mailer.jp/fms/2fc037a7379554",
    tel: "tel:09017862822",
  },
  /** SNS（未設定の場合は空文字のまま） */
  sns: {
    instagram: "https://www.instagram.com/emika_kamioroshi/",
    line: "https://lin.ee/RnlnYGy",
    /** X（Twitter）アカウントの @ハンドル（例: "@emika"）。未使用なら空文字 */
    x: "",
  },
  /** Twitter Card 設定 */
  twitter: {
    card: "summary" as const,
    /** @ハンドル（site 用）。未使用なら空文字 */
    site: "",
  },
} as const;

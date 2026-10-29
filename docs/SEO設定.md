# SEO設定

本番URLは `https://spiritual-emika.pages.dev/` です。`src/config/site.ts` の `url` をAstro設定・canonical・OGP・構造化データ・robots・サイトマップで共用しています。

## 編集箇所

- `src/config/site.ts`：タイトル、説明文、店舗情報、公式SNS。
- `src/components/common/Seo.astro`：canonical、OGP、Xカード、JSON-LD。既存ロゴから1200×1200pxのJPEG共有画像と96×96pxのPNGファビコンをビルド時に生成します。ロゴ全体を表示する正方形の共有画像に合わせ、Xカードはsummary形式を使用します。
- `src/pages/robots.txt.ts`：クロール許可とサイトマップの場所。
- `src/pages/sitemap.xml.ts`：トップページのみを登録。ページ内アンカーと外部リンクは含めません。

構造化データはLocalBusiness・WebSite・WebPage・ImageObjectを関連付けています。営業時間は掲載内容の10:00〜20:00を使用し、不定休の案内も記載しています。未確認の座標、評価、口コミ集計、効果の保証は追加していません。

## 公開手順

1. `npm run build` で生成した `dist/` をCloudflare Pagesにデプロイします。Git連携を利用している場合は変更を対象ブランチに反映し、新しいビルドを実行してください。
2. 公開後に `/robots.txt` がプレーンテキスト、`/sitemap.xml` がXMLとして返ることを確認します。HTTP 200でもトップページのHTMLが返る場合は正しく反映されていません。
3. 公開HTMLの `og:image` のURLが画像として表示されることを確認します。
4. Google Search ConsoleでURLプレフィックス `https://spiritual-emika.pages.dev/` の所有権を確認し、サイトマップ `https://spiritual-emika.pages.dev/sitemap.xml` を送信します。
5. Search ConsoleのURL検査でトップページのインデックス登録をリクエストします。

所有権確認用のコードが発行された場合にのみ、その実際のコードを追加してください。リッチリザルトテストで公開URLの構造化データも確認できます。コードへのSEO設定だけでは、公開反映や検索結果への登録を意味しません。

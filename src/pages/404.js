// src/pages/404.js
import React, { useEffect } from "react"

const NotFoundPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ルートアクセスの場合、index.htmlにリダイレクト
      window.location.replace("/index.html")
    }
  }, [])

  return (
    <div>
      <h1>ページが見つかりません</h1>
      <p>リダイレクト中...</p>
    </div>
  )
}

export default NotFoundPage

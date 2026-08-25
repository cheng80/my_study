import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>오늘부터 Next.js 시작!</h1>
      <Link href="products/1">제주 여행 보기</Link>
    </div>
  );
}

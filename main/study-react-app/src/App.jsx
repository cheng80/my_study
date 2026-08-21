import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';

function ProductListPage() {
  return (
    <main>
      <h1>여행 목록</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Link는 페이지 전체를 새로고침하지 않고 화면을 바꿔요. */}
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (product === undefined) {
    return <p>해당 여행을 찾을 수 없습니다.</p>;
  }

  return (
    <main>
      <Link to="/">목록으로</Link>
      <h1>{product.title}</h1>
      <p>주소에서 읽은 상품 번호: {productId}</p>
    </main>
  );
}


function NotFoundPage() {
  return (
    <main>
      <h1>404 페이지를 찾을 수 없습니다.</h1>
      <Link to="/">처음으로 이동</Link>
    </main>
  );
}

const products = [
  { id: "1", title: "제주 바다 산책" },
  { id: "2", title: "부산 야경 여행" },
  { id: "3", title: "강릉 카페 투어" },
];

function App() {

  return ( // 리턴 함수 안에서 무조건 단 하나의 엘리먼트만 존재해야 합니다. 최상위에서 단 하나의 엘리먼트만 반환 해줘야 합니다. 왜냐면 이것은 함수 이기 때문이죠.
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
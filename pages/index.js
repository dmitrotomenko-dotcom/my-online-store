export default function HomePage() {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Ласкаво просимо до нашого магазину!</h1>
        <p>Найкращий дитячий одяг</p>
      </header>
      
      <main style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h2>Боді "Ведмежатко"</h2>
          <p>Ціна: 250 грн</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h2>Штанці "Хмаринка"</h2>
          <p>Ціна: 300 грн</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h2>Шапочка "Зайчик"</h2>
          <p>Ціна: 150 грн</p>
        </div>
      </main>
    </div>
  );
}

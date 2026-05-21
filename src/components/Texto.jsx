import '../css/App.css';
export  function Texto({children: texto}) {
  return (
    <text className="texto">
      {texto}
    </text>
  );
}
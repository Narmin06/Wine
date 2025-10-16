import "./aboutSommelier.css";

export default function AboutSommelier() {
  return (
    <section className="about-sommelier">
      <div className="about-container">
        <div className="about-left">
          <p>
            Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, 
            но и узнать много нового о сочетаниях, подборе гастрономической пары, необходимости декантации, 
            хранения и сервировки.
          </p>
        </div>

        <div className="about-right">
          <p>
            Мы с удовольствием поделимся с вами самыми главными винными секретами, 
            а также поможем подобрать идеальный букет и вкус, соответствующие поводу, 
            вашим предпочтениям и статусу.
          </p>
        </div>
      </div>
    </section>
  );
}

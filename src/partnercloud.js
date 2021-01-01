import './App.css';
import partners from './partners.json';

const partnersmap = Array.from(partners);

function Partnercloud() {

  const Partnermap = partnersmap.map((partner, index) =>
      <a class="partner" href={partner.url}>
        <img src={partner.imagelink} />
      </a>
  );

  return (
    <div id="partners">
      <div class="text">
        <h3>brought to you by</h3>
        <div id="partnercloud">
          {Partnermap}
        </div>
      </div>
    </div>
  );
};

export default Partnercloud;

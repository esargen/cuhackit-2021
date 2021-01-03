import './partnercloud.scss';
import partners from './partners.json';

const partnersmap = Array.from(partners);

function Partnercloud() {

  const Partnermap = partnersmap.map((partner, index) =>
      <a className="partner" href={partner.url}>
        <img src={partner.imagelink} />
      </a>
  );

  return (
    <div id="partners">
      <div className="text">
        <h3>brought to you by</h3>
        <div id="partnercloud">
          {Partnermap}
        </div>
      </div>
    </div>
  );
};

export default Partnercloud;

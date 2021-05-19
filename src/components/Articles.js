import React from 'react'


/*
Tällä sivulla luodaan sivulla olevat artikkelit
*/
const Articles = () => {

  return (
    <div className="container" >
      <div className="Articles" >
        <div className="article" id="1">
          <h2>Rokote: miksi, miten ja milloin?</h2>
          <br />
          <br />
          <p>
            Rokotteen ottaminen on vapaaehtoista. Näin toimimalla on kuitenkin mahdollista suojella niin itseään kuin ympäröiviä ihmisiä COVID-19-taudilta.
            <br />
            <br />
            Tauti aiheuttaa hengitystieinfektion, jonka vaikeus vaihtelee oireettomasta erittäin vakavaan. Vielä ei olla varmoja siitä, miten hyvin rokotteet ehkäisevät viruksen tarttumista,
            mutta niiden on todistettu suojaavan koronavirustaudilta ja sen oireilta. Oireettomat kantajat levittävät virusta vähemmän kuin oireelliset. Tämän perusteella rokotteet auttavat
            laumasuojan syntymisessä. Rokottautumalla siis suojaa sekä itseään että muita.
            <br />
            <br />
            Suomessa rokotuksia järjestävät kunnat. Seuraa oman kuntasi viestintää, niin saat selville kun sinulla on mahdollisuus saada rokote. Rokotteet ovat ilmaisia kaikille Suomessa asuville.
            <br />
            <br />
            Rokotukset on järjestetty ryhmittäin. Järjestyksen tavoitteena on vähentää vakavia tautitapauksia ja ennenaikaisia kuolemia sekä ylläpitää terveydenhuollon kantokykyä.
            <br />
            <br />
          </p>
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/rokotusjarjestys-ja-covid-19-taudin-riskiryhmat" target="_blank" rel="noreferrer noopener">
            Lue lisää rokotusjärjestyksestä
            <br />
            <br />
          </a>
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/oma-koronarokotus-miten-miksi-ja-milloin-" target="_blank" rel="noreferrer noopener">
            Lue lisää rokotteista
          </a>
        </div>
        <div className="article" id="2">
          <h2>Rokotteen toiminta</h2>
          <p>
            <br />
            <br />
            Rokotteita on tarjolla kahta eri tyyppiä: mRNA- ja adenovirusvektorirokotteita.
            <br />
            <br />
            Adenovirusvektorirokotteessa käytetään kuljettimena ihmiselle vaarattomaksi käsiteltyä adenovirusta. Sitä on hyödynnetty vastaavasti aiemmin esimerkiksi ebola-, rabies-, malaria- ja tuberkuloosirokotteissa.
            <br />
            <br />
            Rokotteessa kuljettajaviruksen perimään on siirretty geeni, joka tuottaa erästä koronaviruksen pintaproteiinia. Kuljettajavirus vie geenin lihassolun sisään, jolloin solut alkavat tuottaa
            tätä viruksen pintaproteiinia. Elimistö tunnistaa proteiinin vieraaksi, ja alkaa tuottaa vasta-aineita sekä aktivoida T-auttajasoluja. Tämän seurauksena, jos elimistöön jatkossa pääsee koronaviruksia,
            T-solut tunnistavat ne ja aktivoivat elimistön muun puolustusjärjestelmän.
            <br />
            <br />
            Adenovirusrokotteessa ei ole lisääntymiskykyistä koronavirusta, eikä se siksi voi aiheuttaa koronavirustautia.
            <br />
            <br />
            Adenovirusrokotteita valmistavat AstraZeneca ja Johnson & Johnson.
            <br />
            <br />
          </p>
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/adenovirusvektorirokotteista-usein-kysyttya" target="_blank" rel="noreferrer noopener">
            Lue lisää vektorirokotteista
          </a>
          <p>
            <br />
            <br />
            mRNA-rokotteet pohjautuvat uuteen teknologiaan, jonka avulla lihassolut saadaan tuottamaan viruksen pintaproteiinia lähetti-RNA:n avulla. Tämän jälkeen vaikutusmekanismi on sama:
            elimistö tunnistaa vieraan proteiinin ja alkaa tuottaa vasta-ainetta.
            <br />
            <br />
            mRNA-rokotteita ei ole käytetty aiemmin, mutta niitä on tutkittu ja kehitetty 1990-luvulta lähtien. mRNA-rokotteiden tapa käyttää ihmisen omaa elimistöä rokotteen vaikuttavan aineen
            tuotantoon on lyhentänyt huomattavasti rokotteen kehittämisen vaativaa aikaa.
            <br />
            <br />
            mRNA-rokotteita valmistavat Biontech-Pfizer ja Moderna.
            <br />
            <br />
          </p>
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/mrna-rokotteista-usein-kysyttya">
            Lue lisää mRNA-rokotteista
          </a>
        </div>
        <div className="article" id="3">
          <h2>Rokotteiden teho</h2>
          <p>
            <br />
            <br />
            Rokotus saa välittömästi aikaan elimistön puolustusjärjestelmän aktivoitumisen. Kaikkia Suomessa tällä hetkellä käytettäviä rokotteita annetaan kaksi annosta. Toinen annos nostaa
            suojan 80-95 prosenttiin. Teho riippuu rokotetun iästä ja perussairauksista, sekä kiertävien virusten laadusta.
            <br />
            <br />
            Tämänhetkisen tiedon mukaan nyt käytössä olevat rokotteet suojaavat myös uusilta virusmuodoilta. Tiettyjä muunnoksia vastaan teho voi kuitenkin olla heikompi. Tästä tutkimus tulee tuomaan lisätietoa.
            <br />
            <br />
            Myöskään koronarokotteiden synnyttämän suojan kestosta ei ole vielä varmaa tietoa. Erityisesti virusmuunnoksia vastaan joudutaan mahdollisesti antamaan tehosteannoksina rokotteita
            tiettyjä muunnoksia vastaan.
          </p>
          <br />
          <br />
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/mrna-rokotteista-usein-kysyttya" target="_blank" rel="noreferrer noopener">
            Lue lisää
          </a>

        </div>
        <div className="article" id="4">
          <h2>Rokotteiden kehitys</h2>
          <p>
            <br />
            <br />
            Suomessa jaettavat koronarokotteet ovat käyneet läpi kaikki lääkeviranomaisten vaatimat tutkimusvaiheet. Niiden teho, laatu ja turvallisuus ovat täyttäneet Euroopan lääkeviraston kriteerit.
            <br />
            <br />
            Koronarokotteiden kehitys on ollut tavallista nopeampaa useasta syystä. Pandemia on koetellut kaikkia, minkä vuoksi kehittämistyöhön on panostettu valtavasti resursseja eri puolilla
            maailmaa. Myös tutkijoiden, lääketeollisuuden ja lääkeviranomaisten yhteistyö on ollut tavallista aktiivisempaa. Tutkimusvaiheita on esimerkiksi kyetty ajan säästämiseksi tekemään rinnakkain.
            <br />
            <br />
            Rokotteiden arviointiprosessia on nopeutettu. Euroopan lääkevirasto on tavallista poiketen arvioinut tutkimustuloksia sitä mukaa, kun ne valmistuvat. Tämä ei kuitenkaan ole muuttanut arviointikriteereitä.
            <br />
            <br />
            Myös aiempi tutkimus ja kehitystyö on nopeuttanut koronarokotteiden kehitystä. Esimerkiksi SARS:n ja MERS:n ehkäisemiseen tähdännyt rokotekehitys on luonut hyvän pohjan kehitystyölle.
             mRNA-rokotteiden toimintaperiaate on keksitty jo 1990-luvulla, ja adenovirusvektoreita on kehitetty jo 1980-luvulta lähtien.
          </p>
          <br />
          <br />
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/koronarokotteiden-kehittaminen" target="_blank" rel="noreferrer noopener">
            Lue lisää
          </a>
        </div>
        <div className="article" id="5">
          <h2>Turvallisuus ja haittavaikutukset</h2>
          <p>
            <br />
            <br />
            Rokotuksen jälkeen rokotuksen pistokohdassa voi ilmetä parin vuorokauden sisällä paikallisia oireita kuten kipua, punoitusta kuumotusta ja turvotusta. Tavallisia ovat myös yleisoireet
            kuten kuume, lihassärky, päänsärky, väsymys, huonovointisuus ja vilunväristykset. Oireet menevät ohi muutamien tuntien tai korkeintaan vuorokausien kuluessa. Ne kertovat elimistön
            puolustusjärjestelmän aktivoitumisesta, eli rokotteen toiminnasta.
            <br />
            <br />
            Vaikka rokotteet on testattu perusteellisesti, harvinaisten haittavaikutusten mahdollisuutta ei minkään rokotteen tai lääkkeen kohdalla voida täysin sulkea pois. Lääkevalvontaviranomaiset
            seuraavat rokotteiden mahdollisia haittavaikutuksia
            <br />
            <br />
            AstraZenecan koronarokotteen saaneilla on ilmoitettu Euroopassa harvinaisia veren hyytymishäiriöitä. Euroopan lääkevirasto on todennut yhteyden rokotteeseen olevan mahdollinen.
            Hyytymishäiriöitä on ilmaantunut keskimäärin yhdellä 100 000:tta AstraZenecan rokotteen saanutta kohden.
            <br />
            <br />
            Tämän vuoksi Suomessa ei tällä hetkellä rokoteta kyseisellä rokotteella alle 65-vuotiaita. Tätä vanhemmilla vakavan koronavirustaudin riskit ovat huomattavasti suurempia, eikä lisääntynyttä
            hyytymishäiriöiden riskiä ole havaittu.
            <br />
            <br />
            Rokotteiden kanssa ollaan siis sekä varovaisia, että valmiita reagoimaan tarkentuvaan tietoon. On myös otettava huomioon, että itse koronavirustautiin liittyy selvästi suurempi verisuonitukosten riski.
          </p>
        </div>
        <div className="article" id="6">
          <h2>Koronatodistus</h2>
          <p>
            <br />
            <br />
            Suomessa valmistellaan Omakanta-palvelusta saatavaa koronatodistusta. Se koostuisi todistuksista koronarokotteesta, negatiivisesta koronatestituloksesta sekä sairastetusta koronasta.
            EU:n yhteinen todistus on tarkoitus ottaa käyttöön heinäkuussa. Kansallinen todistus rokotteista taas on määrä ottaa käyttöön toukokuun lopulla.
            <br />
            <br />
            Koronatodistuksen käyttötarkoitus on vapaan liikkuvuuden helpottaminen valtioiden rajoilla. Muista käyttötarkoituksista ei ole vielä päätetty. Mobiililaitteelta esitetty tai paperille
            tulostettava todistus yhtenäistää ja helpottaa rajoilla tapahtuvaa valvontaa. Kukin EU:n jäsenmaa päättää itse, mitä todistuksia ne edellyttävät maahan saapuvilta henkilöiltä.
            <br />
            <br />
          </p>
          <a href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/todistus-koronarokotuksesta">
            Lue lisää
          </a>
        </div>
      </div>
    </div>
  )
}

export default Articles
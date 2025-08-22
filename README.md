## SudokuSolver: Karminen
NextJS demona luotu fullstack palveluna luotu palvelin/web-käyttöliittymä kontti, joka on tarkoitus pyöriä lokaalina. Sovelluksen päätarkoituksena oli huijata parempi aika LinkedIn sudokussa, jossa on 6x6 kenttä, mutta siihen on lisätty "turhia" ominaisuuksia täydentämään pakettia. Käyttöliittymää ei kuitenkaan ole viimeistelty, sillä se ajaa asiansa.

### Ominaisuudet
- Paketti pyörii yhdessä kontissa, joka yhdistää palvelimen ja käyttöliittymän.
- Sovellus tunnistaa pöydän/matriisin koon ja dynaamisesti muokkaa sitä käyttöliittymässä.
- Käyttöliittymä sisältää yksinkertaisen, mutta dynaamisen validoinnin syötetyille luvuille.
- Palvelin vastaanottaa pelkästään pöydän/matriisin ja päättelee sen perusteella sivujen pituuden, sekä lohkojen koon ilman erillistä parametriä.
- Ratkaisu algoritminä toimii yksinkertainen backtrack

### Asennus
Repo sisältää valmiin Docker compose tiedoston, joten sovelluksen ajamiseen tarvitaan vain Docker ja komento repon juuressa
```
$docker compose up
```
Palvelu pyörii lokaalina portissa 3000, eli osoite on <a>http://localhost:3000/</a>

Palvelu puretaan komennolla
```
$docker compose down
```
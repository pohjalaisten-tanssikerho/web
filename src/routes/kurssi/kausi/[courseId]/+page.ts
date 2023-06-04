import type { PageLoad } from './$types'
export const load: PageLoad = async({params, fetch}) => {
  const response = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/courses.json')
  const data = await response.json()
  const dances = data.courses.map(course => ({ date: course.date, dance: course[params.courseId]}))

  const courses = {
    alkeetOma: {
      id: 'alkeetOma',
      title: 'Alkeiskurssi oman parin kanssa',
      content: '<p>Alkeiskurssille voi osallistua ilman minkäänlaista aiempaa tanssikokemusta ja tanssiharrastuksen voi aloittaa alkeiskurssin merkeissä joko keväällä tai syksyllä. Kurssilla opitaan perusteet tärkeimmistä ja käyttökelpoisimmista tanssilajeista. Näillä lajeilla pärjää niin tanssilavalla, häissä, karaokebaarissa kuin opiskelijabileiden diskossakin. Lisäksi kurssilla luodaan vahva pohja uusien tanssilajien opettelulle sekä omaehtoiselle luovalle irrottelulle tanssilattialla. Mikäli et vapaa-ajalla käy tanssimassa, suosittelemme käymään alkeiskurssilla vuoden ajan ennen alkeisjatkoon siirtymistä.</p><p><strong>Kurssilla tanssitaan oman parin kanssa!</strong></p>',
    },
    alkeet: {
      id: 'alkeet',
      title: 'Alkeiskurssi parin vaihdoilla',
      content: '<p>Alkeiskurssille voi osallistua ilman minkäänlaista aiempaa tanssikokemusta ja tanssiharrastuksen voi aloittaa alkeiskurssin merkeissä joko keväällä tai syksyllä. Kurssilla opitaan perusteet tärkeimmistä ja käyttökelpoisimmista tanssilajeista. Näillä lajeilla pärjää niin tanssilavalla, häissä, karaokebaarissa kuin opiskelijabileiden diskossakin. Lisäksi kurssilla luodaan vahva pohja uusien tanssilajien opettelulle sekä omaehtoiselle luovalle irrottelulle tanssilattialla. Mikäli et vapaa-ajalla käy tanssimassa, suosittelemme käymään alkeiskurssilla vuoden ajan ennen alkeisjatkoon siirtymistä.</p>',
    },
    alkeisjatko: {
      id: 'alkeisjatko',
      title: 'Alkeisjatko',
      content: '<p>Alkeisjatkokurssille voit osallistua alkeiskurssin käytyäsi tai kun hallitset perusaskeleet. On suositeltavaa osallistua kurssille vuoden ajan ennen jatkokurssille osallistumista.</<p><p>Alkeisjatkokurssilla on kiertävä parin vaihto!</p>',
      register: '',
    },
    jatko: {
      id: 'jatko',
      title: 'Jatkokurssi',
      content: '<p>Alkeisjatkokurssin käytyäsi tai muualla pidempää tanssittuasi voit osallistua jatkokurssille, jossa opitaan lisää tanssilajeja ja -tekniikkaa. Tahti jatkokurssilla on alkeisjatkokurssia nopeampi ja perusaskeleita tansseista ei kerrata. Jatkokurssiin pyritään saamaan hieman tavallisesta poikkeavia tanssilajeja. Syksyn ja kevään jatkokurssit ovat sisällöltään erilaiset; kurssilla riittää helposti oppimista ainakin koko vuodeksi!</p>'
    },
  }

  return { params, dances, courses }
}

import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function ProfileView() {
  const name = useOutletContext();
  const navigate = useNavigate();

  function navigateToData() {
    navigate("/profile/data");
  }
  // useEffect(() => {
  //   navigate("/profile/data");
  // }, []);
  console.log(name);
  return (
    <div>
      <h2>ProfileView</h2>
      {/* <button onClick={navigateToData}>Go to data</button> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        libero. Culpa deserunt impedit maxime facilis magnam unde nisi voluptate
        corrupti! Autem pariatur eaque facere ducimus ipsam nesciunt quia nobis
        reiciendis. Cum odio voluptatibus possimus. Dolorum ullam ducimus
        eligendi praesentium molestias. Aliquid nisi cupiditate reiciendis?
        Ipsum aliquid veritatis non voluptatem consectetur? Necessitatibus
        accusamus dolore expedita aut suscipit veniam reprehenderit iste
        excepturi. Tempora eaque vitae neque. Quaerat asperiores sapiente fugiat
        facere magnam. Cum suscipit voluptatum nulla adipisci nesciunt deleniti
        possimus itaque incidunt! Voluptatibus autem ratione officia non
        corrupti, deleniti ipsam sed architecto. Ipsum dignissimos nam earum
        architecto, fugiat dolores labore voluptatibus cumque? Architecto ea
        facilis harum cupiditate nostrum soluta fugiat? Blanditiis, excepturi.
        Et possimus adipisci voluptatum quaerat sequi porro in, accusantium ea.
        Cumque fugit exercitationem quia excepturi dolorem perspiciatis eum quam
        quasi! Deserunt, quisquam sed soluta placeat quod consequuntur autem
        dolores consequatur? Mollitia perferendis repellat culpa beatae,
        provident recusandae sed voluptas ut? Explicabo, unde dolore quaerat
        quam illum et accusantium voluptate harum. Corrupti nemo dignissimos in,
        non veritatis quibusdam iusto impedit id! Magni, mollitia possimus atque
        deserunt fuga porro sapiente quam fugit! Illo necessitatibus officiis
        deleniti cumque eum repellendus nesciunt esse reiciendis. Nobis nemo
        magni minima aliquam obcaecati rerum dicta perferendis tempore?
        Pariatur, dolorem temporibus dolores laboriosam odio maxime dolore
        voluptatem sunt. Velit tempora quidem quisquam natus modi. Beatae id
        reprehenderit eos. Aliquid, quae dolor sapiente modi facere error hic
        nobis rem. Nisi veritatis fugiat provident aut neque eum vero eaque
        atque. Ipsum, voluptatum necessitatibus? Aliquam eum aspernatur velit!
        Molestias, adipisci assumenda! Obcaecati sequi quos cumque eos
        aspernatur quisquam dolore asperiores quae. Accusantium adipisci sit cum
        maxime et magnam laborum placeat delectus? Sequi reiciendis fugit porro
        facere adipisci quas suscipit eius laboriosam. Iure commodi rem nulla
        dolore aliquid minus tempore quisquam ipsam? Dolor eos totam est qui
        earum mollitia? Placeat, atque suscipit. Aliquam, dicta magnam. Vel fuga
        optio dolorum cum nostrum molestiae. Rem ipsam, neque omnis tenetur quod
        reiciendis perferendis illum optio. Tempore eaque sapiente cumque sequi
        nihil iusto odio. Fugit, eius. Illo vitae, ad error cum earum et atque
        quod reiciendis. Soluta, quia iure a nihil quos reiciendis molestias
        ratione unde? Consectetur ipsam, tempore quas quasi accusantium neque
        omnis repellendus incidunt? Iusto voluptates distinctio dolore culpa
        itaque quibusdam illum recusandae sequi! Quas rem quidem fuga
        accusantium? At soluta debitis velit perferendis! Optio rem voluptatibus
        cumque laboriosam mollitia ad perferendis consequatur sit. Libero dolore
        quo vero? Aliquid error harum dolor ut eum! Dolore aperiam hic
        accusantium eos corrupti dicta aliquid nesciunt veritatis? Vel, est
        veritatis architecto laudantium ab pariatur distinctio rem quos?
        Blanditiis rem fuga enim facilis qui. Tenetur repellendus deserunt
        excepturi? Esse exercitationem nulla voluptates debitis quod officiis
        eveniet veniam? Error! Dolore corporis accusantium in omnis odit
        similique velit eius perspiciatis. Ea sed animi ipsa quis omnis
        doloribus consequatur nobis rerum? Eius molestias impedit voluptatem
        quas unde officia labore temporibus delectus. Dolore officiis nostrum
        quia voluptas accusantium enim aut delectus et. Perspiciatis non autem
        ratione illum. Ab non doloremque fugit iste! Numquam cupiditate eligendi
        aliquid laborum minima aspernatur quos voluptatibus quisquam! Illo modi,
        ducimus corrupti reprehenderit veniam aperiam cumque dolorum vero.
        Magnam dignissimos explicabo saepe enim sint libero repudiandae
        excepturi eligendi. Consequuntur consectetur voluptas odio vero expedita
        quas doloribus beatae fuga. Laboriosam soluta quia sint quo nihil esse
        praesentium odio nam. Exercitationem consectetur minus quos nisi
        molestias nam ipsa repellat minima! Atque explicabo voluptas beatae quas
        autem excepturi, sunt debitis dolorum! Autem, perspiciatis molestiae
        corporis ut impedit necessitatibus illum id repudiandae! Nihil similique
        praesentium ratione sapiente. Sint odit ducimus cupiditate architecto?
        Architecto quas iste doloribus. Iusto laborum quo quibusdam doloribus
        veritatis. Itaque, laborum! Explicabo accusamus nisi doloremque
        doloribus, omnis ipsam pariatur. Quam dolore culpa repellendus
        temporibus commodi perspiciatis saepe asperiores necessitatibus!
        Nesciunt fugit tempora adipisci culpa cupiditate, aliquid voluptatum
        quaerat tempore? Magnam sunt laudantium consectetur minus saepe! Quas ab
        minus ex? Non error accusamus illum ullam repudiandae quasi eum quisquam
        ex! Ratione tempore ullam natus consequatur quae vel veritatis
        similique? Ratione. Debitis accusantium repellat nesciunt aliquid velit
        voluptate in. Magni, delectus! Ad eaque quaerat consequuntur, hic soluta
        autem aliquid? Saepe, soluta. Labore quo expedita saepe officiis
        excepturi sed! Necessitatibus, sunt repellat! Asperiores iure eius eos
        temporibus, ea cumque natus molestias voluptatibus. Id, voluptatem.
        Harum provident est rerum sit itaque saepe obcaecati? Voluptas laborum
        ipsa quisquam blanditiis perferendis quaerat saepe maxime magni. Itaque
        recusandae ullam odio accusantium eius, possimus molestias optio
        voluptas! Minus, sequi repellat. Eos quae, repellendus corporis
        accusamus quis voluptate. Optio recusandae quibusdam adipisci. Neque
        incidunt magnam architecto nulla tenetur? Tempore sint nisi rerum
        doloremque harum veniam hic sit maxime? Assumenda voluptates dignissimos
        quae dolore? Eligendi placeat iusto voluptates voluptatem? Non deserunt
        unde dolore nobis delectus possimus aperiam magni ut. Voluptates,
        aliquid molestias. Nihil eius deleniti dolorum eveniet fugit optio.
        Molestias corrupti error consectetur harum? Suscipit quam magni
        recusandae vero! Molestiae sint odio minima cum modi suscipit doloremque
        explicabo repudiandae? Velit, esse dignissimos! Provident delectus odio
        nam, iure dicta dolores. Inventore voluptate in perferendis, et
        voluptatibus iste atque molestias mollitia. Iure facilis quaerat unde,
        delectus odit velit ad facere eius? Labore dolores harum amet eaque
        voluptatum excepturi culpa pariatur molestiae. Vitae voluptas eum nihil
        recusandae illum officiis esse vel facilis! Saepe quas facilis omnis
        laboriosam doloribus ducimus voluptates doloremque neque? Ipsam,
        dignissimos nostrum enim sunt nemo quisquam cumque architecto
        praesentium! Quasi, pariatur? Repudiandae nostrum corrupti ex amet
        labore quaerat cupiditate. Adipisci nobis hic aspernatur similique eaque
        esse autem sequi culpa! Ipsum explicabo, cumque eligendi minus sunt
        autem assumenda porro maxime? Aperiam reprehenderit doloremque id
        distinctio enim modi necessitatibus obcaecati error. Praesentium cumque
        magni optio, dicta nulla facilis ipsam nihil perferendis? Rem repellat
        distinctio adipisci totam suscipit recusandae ducimus nihil minus.
        Nesciunt quasi tenetur consectetur minus praesentium temporibus
        inventore rem est? Quis veritatis, fugiat dolorum quas temporibus in
        fugit. Aspernatur, ullam? Laborum voluptate totam in inventore esse
        maxime nostrum vel quo? Nesciunt et excepturi a. Ab repellendus adipisci
        velit magni repellat. Voluptas officiis repellendus unde quo quae
        impedit blanditiis perferendis ut. Nobis sequi ab perferendis recusandae
        iure distinctio vero? Beatae, alias! Commodi velit nihil blanditiis
        facilis consectetur officiis vero ad quasi? Distinctio quos dolorem iure
        asperiores nisi deleniti iusto odit qui! Incidunt dolore adipisci neque
        sit sapiente tenetur commodi iusto vitae. Maxime natus modi vero sequi
        architecto, incidunt voluptatibus amet dicta? Ad rem nam libero modi
        adipisci, laboriosam obcaecati architecto nemo. Corporis in molestias
        hic ullam quam quidem obcaecati temporibus ad. Laboriosam ducimus
        voluptates accusantium. Explicabo vero quas consequatur in nobis. Eaque
        maiores illo dicta repellat autem, optio aperiam suscipit laboriosam!
        Corporis, aspernatur eligendi. Sapiente ab, tempore iure eaque excepturi
        iusto! Nobis atque soluta quibusdam optio provident odio tempore commodi
        adipisci! Aut aliquid nobis reprehenderit omnis natus illum debitis
        odit? Ducimus? Est aperiam ipsam voluptates expedita quo voluptatum
        impedit magnam velit. Commodi animi labore quas ab voluptas, nostrum
        vero expedita! Aspernatur! Beatae amet sunt assumenda dolorum in nihil,
        pariatur ipsum dignissimos! Impedit magni voluptatem veniam perspiciatis
        sequi nostrum officiis pariatur accusantium? Culpa odio ipsum cumque
        omnis nam at consectetur cum perferendis? Incidunt voluptatem
        consequatur laboriosam ipsa obcaecati, unde fugit voluptates culpa? Unde
        amet, iusto repellendus rem hic id veniam tenetur quae! Ratione corrupti
        hic dolorem dolorum temporibus nisi veritatis saepe expedita? Quisquam
        ratione ad magnam, quas ab rem veritatis et ipsa. Hic sunt eius ratione,
        quam quisquam omnis sit rerum harum. Officia facere impedit, esse
        laboriosam perferendis necessitatibus et expedita cum. A fuga
        exercitationem cupiditate delectus molestiae error odio aspernatur?
        Quidem. Enim distinctio accusantium sit rem error neque soluta tenetur
        eligendi? Voluptates exercitationem quam quasi quidem reiciendis.
        Recusandae temporibus omnis autem. Tenetur recusandae maiores vitae
        praesentium magni corrupti dolorem autem aliquid! Necessitatibus
        repellat facilis consequatur esse unde tenetur odit, cumque eius?
        Perspiciatis et exercitationem laborum cupiditate maxime quaerat nulla
        totam atque? Perferendis distinctio, rem adipisci quisquam at iure
        voluptatum reiciendis est. Maxime numquam possimus nemo porro ratione
        inventore et! Ducimus, esse! Ex earum praesentium quam veniam enim
        dolorum nostrum dignissimos incidunt! Provident voluptate facilis
        dolorem aperiam harum quas eligendi voluptatibus atque. Aperiam fugit ut
        in. Sunt officiis nulla ullam ipsum recusandae. Doloremque dolorem
        numquam earum dolor ipsa voluptatibus odit velit dolores! Quibusdam
        cupiditate esse soluta rem delectus consectetur dolorum perferendis?
        Fugiat! Molestiae sapiente dolores necessitatibus, deleniti accusantium
        voluptas atque voluptate. Minus. Nisi magni impedit voluptatibus quam
        facere dignissimos vel et similique? In consequuntur suscipit laboriosam
        minus ducimus accusamus autem quae voluptates. In ab natus, deleniti
        aspernatur ratione expedita eos minus sapiente. Voluptate aut commodi
        quae! Ut sed quia culpa architecto placeat! Nostrum nam earum suscipit
        similique impedit, deserunt eligendi! Voluptas, beatae? Quaerat officia
        saepe, vitae voluptates officiis doloribus veritatis omnis earum? Est
        pariatur officia, sint voluptatum enim voluptatem unde in expedita?
        Fugiat perferendis reprehenderit voluptatum minima, alias consequuntur
        necessitatibus tempora quaerat! Blanditiis laudantium accusantium dolore
        repellat, omnis molestias sed adipisci exercitationem. Accusantium quam
        debitis at laborum eos recusandae, esse iure tempora? Distinctio numquam
        aperiam sint illo at dolor obcaecati, doloribus fuga. Laudantium saepe
        aliquid veniam harum est. Vel rem dicta velit? Dolorem quis, ex officiis
        culpa numquam debitis enim recusandae minus! Pariatur, dignissimos omnis
        molestias earum maiores natus? Consequuntur, earum assumenda. Nisi odit
        hic culpa corrupti ipsum mollitia commodi soluta blanditiis? Molestias
        ipsa quisquam atque numquam fugit. Excepturi illo ipsum voluptates? Nam,
        tenetur neque. Delectus suscipit repellendus maxime voluptate odit
        obcaecati. Quidem omnis quasi soluta autem commodi. Praesentium optio
        rerum esse! Dignissimos optio aspernatur obcaecati repudiandae pariatur
        eveniet asperiores aliquid dicta. Aut incidunt ducimus laborum cum,
        rerum molestias qui quo explicabo. Neque eligendi iure consequatur
        voluptatum ex. Reprehenderit alias sunt quas. Asperiores quos odit
        voluptatum consequuntur nesciunt sapiente laborum itaque porro. Quasi
        eveniet ullam nisi sunt veniam hic vitae ipsam placeat! Quas molestias
        illum similique cum esse corrupti magnam? Hic, totam. Quibusdam illum ut
        ea sint magni, eius at inventore natus? Exercitationem qui consectetur
        accusantium assumenda alias debitis cum praesentium cumque. Quasi
        impedit omnis mollitia quia error laborum quos quaerat temporibus! Rem
        saepe hic libero sint ea, magni molestias pariatur debitis? Harum
        deserunt ab tempore aliquam minus, illo autem ratione provident?
        Quisquam ratione quasi culpa vero voluptates eum hic possimus deleniti!
        Vero aperiam sint blanditiis, inventore tenetur mollitia maxime velit
        voluptate. Nobis, maiores maxime id iure omnis explicabo nam alias
        dolores? Libero culpa debitis aliquid autem, optio placeat repudiandae
        quae fugiat? Rem saepe sit praesentium obcaecati ab tenetur officiis
        magnam ipsa. Voluptas neque vel pariatur saepe esse quia delectus
        officiis laboriosam. Deleniti sint reiciendis assumenda iste earum quam
        quaerat eligendi laboriosam. Corrupti ad iusto cupiditate ea accusamus
        eos nemo qui voluptate. Optio, in quaerat facere sapiente impedit cum
        consequatur recusandae neque? Cumque maiores excepturi, corrupti placeat
        esse impedit expedita quia adipisci? Nesciunt ab nostrum vitae
        temporibus, modi ipsa placeat adipisci odit. Cupiditate aliquam placeat,
        voluptatum iusto odio dolore facere quod aut. Labore quas assumenda
        illum quis dolorum beatae similique quae nisi. Libero voluptatem
        quisquam molestiae, ut est natus quaerat incidunt voluptatum. Deleniti
        praesentium vitae cum, nesciunt est alias ab porro eum? Culpa atque
        molestiae nemo asperiores officiis voluptatem excepturi libero
        consequatur. Nam molestiae culpa magnam eligendi? Eligendi quisquam
        vitae inventore exercitationem? Laborum qui deleniti, consequatur
        consequuntur sit error dolor iure modi? Odit quo cupiditate pariatur
        atque dolorem velit eaque cum at! Itaque, odio porro. Tempore blanditiis
        deserunt illum odio quod ullam! Nihil ea quae commodi ex quam eos
        numquam ipsum libero! Quod, recusandae quis exercitationem tempora
        libero obcaecati non illum sapiente. Nostrum omnis voluptates, eum
        pariatur officiis nam quisquam cumque natus? Vitae ex tempora fuga quo
        magni sequi eum esse amet? Nostrum magnam, iste excepturi amet sequi
        voluptatibus at minus voluptates. Saepe alias culpa modi id voluptatibus
        minus nulla commodi itaque! Sed temporibus blanditiis eligendi
        accusantium. Explicabo cumque quidem illo suscipit? Ab consequatur
        mollitia distinctio soluta quidem nemo saepe blanditiis temporibus.
        Commodi fugiat neque consequatur cupiditate earum officia error facilis
        enim. Quos accusantium, sint officiis veritatis iure sapiente voluptates
        delectus laboriosam. Nisi dignissimos laboriosam sunt consequatur ex
        quisquam dolor sapiente minima. Consequuntur accusamus odit quis ea
        mollitia dignissimos provident sapiente ratione! Veritatis eum ut et
        perferendis quas nemo consequatur nam minima? Qui molestias, quibusdam
        voluptate tenetur est deserunt in totam voluptatibus? Blanditiis nihil,
        saepe officia possimus libero dolorum distinctio totam aspernatur.
        Inventore, qui magnam! Sunt rerum corrupti molestias fuga enim totam!
        Autem ab mollitia quasi! Velit voluptatem quidem ducimus facilis libero.
        Exercitationem mollitia veritatis animi? Eum ducimus porro incidunt
        nesciunt est. Repellendus, voluptatum sunt. Aperiam, aliquid iusto?
        Incidunt odio facilis eius. Fugiat tenetur dicta eum porro nemo
        similique deserunt animi nesciunt! Perspiciatis omnis doloremque
        molestias nesciunt fugit qui ipsum delectus dicta. Cumque cum assumenda,
        doloremque vitae quibusdam ullam provident nesciunt ut? Quibusdam, sit
        obcaecati. Alias mollitia at enim, sit suscipit placeat? Quaerat
        molestiae ullam impedit? Doloribus quam sed repellat. Doloremque, nam?
        Autem voluptatibus voluptatem tempora veniam itaque, qui molestias
        cupiditate delectus? Quia harum delectus possimus praesentium dolorem
        laudantium animi voluptatum sunt. Officiis ex excepturi velit deserunt
        iure consequatur cupiditate soluta eum. Fuga, autem labore molestiae
        nulla eos ut rem aut in. Quia illum provident accusantium pariatur a
        illo, eligendi quas cum? Iure facere inventore exercitationem recusandae
        libero a quisquam placeat molestiae? Accusamus minus iste possimus sunt
        dolore provident vitae, at nobis? Aspernatur dicta voluptatum ratione
        deleniti, quia veniam perferendis hic accusamus! Excepturi voluptatum
        eveniet voluptates nisi enim laborum dolor nostrum iusto! Nobis cumque
        veniam a consectetur est vel numquam. Accusamus, reprehenderit? Quisquam
        deleniti quos velit esse eius ipsa rerum, accusantium voluptas? Nemo
        adipisci ut ipsum commodi quaerat eius autem quibusdam magnam! Nam, sed!
        Dolorem quaerat, animi amet officia iste optio. Facere. Labore, numquam
        consequatur. Adipisci, natus deleniti? Architecto sapiente error
        pariatur? Beatae vel inventore deleniti vitae error nisi voluptas aut
        sunt! Distinctio ea unde dolorum obcaecati excepturi id nobis commodi
        eveniet? Veniam suscipit itaque quibusdam facere expedita sunt?
        Obcaecati, aliquid similique. Incidunt ea nam eveniet natus illo fuga
        deserunt, praesentium harum. Minus aliquid magnam quisquam voluptates
        sed ab hic impedit veritatis? Doloribus repellendus incidunt omnis
        deserunt beatae ipsa? Error, dicta atque. Perspiciatis ex similique quos
        quas unde, consequatur consequuntur quibusdam molestiae. Provident
        cumque quisquam ullam quod, amet quam maiores corrupti error. Error
        corrupti tenetur praesentium ea alias neque dolorum aut natus. Ratione
        in saepe cupiditate libero suscipit eum? Qui, molestias numquam? Nisi
        eum enim, expedita reprehenderit repudiandae aliquid blanditiis mollitia
        accusamus! Enim perferendis exercitationem reiciendis inventore
        cupiditate illo corrupti sit quisquam. Facere dolores nulla expedita
        ducimus et qui ab, voluptatibus corporis. Possimus, nisi? Tenetur animi,
        voluptas excepturi tempora nulla ipsam consequatur! Qui velit cum
        veritatis modi quod aliquam. Quis, tenetur sequi? Debitis expedita alias
        possimus aut odio incidunt fugit tempore deleniti? Optio asperiores
        velit quis! At incidunt obcaecati quam doloremque amet! Perspiciatis,
        voluptatum distinctio nesciunt temporibus laboriosam quos harum repellat
        blanditiis.
      </p>
    </div>
  );
}

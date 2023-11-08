import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}

export default function AboutMe({ items, heading }: Props) {

    // -1 means no item is selected; 0 means 1st item is selected
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
      // <> means to use a fragment for all the children element below
      <>
        <div class="container-fluid mt-3">
        <h2>{heading}</h2>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                <div class="col-sm-3 p-1 bg-dark text-white">
                    {items.map((item, index) => (
                        <li
                            className={selectedIndex === index? 'list-group-item active' : 'list-group-item'}
                            key={item}
                            onClick={() => {setSelectedIndex(index);}}
                        >
                            {item}
                        </li>
                    ))}
                </div>
            </ul>

            <main>
                <h2>Some Mysterious Facts About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Tellus elementum sagittis vitae et leo duis. Duis at tellus at urna. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Ultricies lacus sed turpis tincidunt. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Ultricies leo integer malesuada nunc. Leo duis ut diam quam nulla porttitor massa id. Donec et odio pellentesque diam volutpat commodo. Feugiat vivamus at augue eget. Quis blandit turpis cursus in hac habitasse platea. Metus aliquam eleifend mi in nulla posuere. Eros in cursus turpis massa tincidunt dui ut.

                    Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Pharetra pharetra massa massa ultricies. Nisl purus in mollis nunc. Bibendum ut tristique et egestas quis ipsum. Morbi tincidunt ornare massa eget. Et malesuada fames ac turpis egestas. Integer feugiat scelerisque varius morbi enim nunc faucibus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Pellentesque diam volutpat commodo sed. Lacinia quis vel eros donec ac odio tempor orci. Ridiculus mus mauris vitae ultricies leo integer malesuada. Nisl vel pretium lectus quam id leo. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Nam libero justo laoreet sit amet cursus sit amet dictum. At augue eget arcu dictum varius duis at. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.

                    Mattis pellentesque id nibh tortor id aliquet lectus proin. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Et malesuada fames ac turpis egestas sed tempus. Lectus sit amet est placerat. Elit ut aliquam purus sit amet luctus venenatis. Diam quam nulla porttitor massa id neque aliquam vestibulum. Pellentesque id nibh tortor id aliquet. In nisl nisi scelerisque eu ultrices vitae. Nec sagittis aliquam malesuada bibendum arcu vitae. Tortor posuere ac ut consequat semper viverra nam libero justo. Ornare aenean euismod elementum nisi. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Fringilla ut morbi tincidunt augue interdum. Vel turpis nunc eget lorem dolor. Auctor eu augue ut lectus arcu bibendum at varius vel. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.

                    Bibendum ut tristique et egestas quis ipsum suspendisse. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Rhoncus dolor purus non enim praesent elementum. Ultricies integer quis auctor elit sed vulputate. Netus et malesuada fames ac. Adipiscing elit ut aliquam purus sit. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Id porta nibh venenatis cras sed. Lobortis mattis aliquam faucibus purus. Morbi enim nunc faucibus a pellentesque sit amet. Dictum non consectetur a erat nam at lectus urna duis.

                    Elementum nibh tellus molestie nunc non blandit massa enim. Massa tempor nec feugiat nisl pretium fusce. Viverra justo nec ultrices dui. Gravida in fermentum et sollicitudin. Duis tristique sollicitudin nibh sit amet commodo nulla. Quisque egestas diam in arcu cursus euismod quis viverra. Vel turpis nunc eget lorem dolor sed. Varius sit amet mattis vulputate enim. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. At in tellus integer feugiat. Donec et odio pellentesque diam volutpat commodo sed. Ipsum suspendisse ultrices gravida dictum fusce ut. Sed blandit libero volutpat sed cras ornare arcu. Etiam sit amet nisl purus in mollis nunc sed id. Est ante in nibh mauris cursus. Pellentesque elit ullamcorper dignissim cras tincidunt. In nibh mauris cursus mattis molestie a.
                </p>
            </main>
        </div>
      </>
    );
}
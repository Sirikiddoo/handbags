import './App.css'
import Button from './components/Button';
import Product from "./components/Product.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Tile from "./components/Tile.jsx";

function App() {
    return (<>

            <h1>Handbags & Purses</h1>

            <nav>
                <Button text="to the collection" disabled={false}/>
                <Button text="shop all bags" disabled={false}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    type={"Best seller"}
                    image={bag1}
                    title={"The handy bag"}
                    price={"400"}
                />
                <Product
                    type={"Best seller"}
                    image={bag2}
                    title={"The stylish bag"}
                    price={"250"}
                />
                <Product
                    type={"New collection"}
                    image={bag3}
                    title={"The simple bag"}
                    price={"300"}
                />
                <Product
                    type={"New collection"}
                    image={bag4}
                    title={"The trendy bag"}
                    price={"150"}
                />
            </main>
            <footer>
                <Tile title="The brand">
                    <p>ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto atque aut, cumque doloribus eos explicabo ipsa maxime, natus necessitatibus nesciunt nobis quidem saepe sit tempora tenetur totam voluptatibus. Laborum.</p>
                    <p>ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto atque aut, cumque doloribus eos explicabo ipsa maxime, natus necessitatibus nesciunt nobis quidem saepe sit tempora tenetur totam voluptatibus. Laborum.</p>
                </Tile>
                <Tile image={brand} description="brand"/>
                <Tile image={our_story} description="the designers"/>
                <Tile title="Our story">
                    <p>lore ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto atque aut, cumque doloribus eos explicabo ipsa maxime, natus necessitatibus nesciunt nobis quidem saepe sit tempora tenetur totam voluptatibus. Laborum.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App;

import "./App.css";

function App() {
  const handleReserve = (name: string) => {
    alert(`Reserva solicitada para: ${name}`);
  };

  return (
    <div>
      <h1>Mapa de Reservas</h1>
      <div className="bg-gray-200 font-bold p-2 w-7/10 h-20 absolute top-55 left-90">
        <h2>Porta entrada</h2>
      </div>
      <div className="bg-gray-200 font-bold p-2 h-20 absolute top-55 left-10">
        <h2>Banheiros</h2>
      </div>
      <div className="bg-gray-200 font-bold p-2 h-20 absolute top-55 right-20">
        <h2>Banheiros</h2>
      </div>
      <div className="bg-gray-200 font-bold p-2 w-7/10 absolute top-85 left-90 text-center">
        <h2>Corredor</h2>
      </div>
      <section>
        <h2 className="sr-only">Salas de Cocriação</h2>
        <ul>
          <li className="bg-yellow-300 p-2 absolute bottom-40 left-10">
            <button onClick={() => handleReserve("Cocriação Wall-E")}>
              Cocriação Wall-E
            </button>
          </li>
          <li className="bg-yellow-300 p-2 absolute top-90 right-10">
            <button onClick={() => handleReserve("Cocriação EVA")}>
              Cocriação EVA
            </button>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sr-only">Salas de Reunião</h2>
        <ul>
          <li className="bg-blue-300 p-2 absolute top-60 left-40">
            <button onClick={() => handleReserve("Reunião BB8")}>
              Reunião BB8
            </button>
          </li>
          <li className="bg-blue-300 p-2 absolute top-100 right-160">
            <button onClick={() => handleReserve("Reunião R2D2")}>
              Reunião R2D2
            </button>
          </li>
          <li className="bg-blue-300 p-2 absolute top-120 right-160">
            <button onClick={() => handleReserve("Reunião C3PO")}>
              Reunião C3PO
            </button>
          </li>
          <li className="bg-blue-300 p-2 absolute top-100 right-110">
            <button onClick={() => handleReserve("Reunião Baymax")}>
              Reunião Baymax
            </button>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="sr-only">Espaços Compartilhados</h2>
        <ul>
          <li className="bg-purple-300 p-2 absolute bottom-10 left-60">
            <button onClick={() => handleReserve("Deck")}>Deck</button>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="sr-only">Espaços Individuais</h2>
        <div className="bg-orange-200 p-2 absolute left-100 top-100">
          <h3>Espaço 1 ao 10</h3>
          <ul>
            <div className="flex flex-wrap">
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 1")}>1</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 2")}>2</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 3")}>3</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 4")}>4</button>
                </li>
                <li className="bg-orange-300 p-1 opacity-70 cursor-not-allowed">
                  <button
                    onClick={() => handleReserve("Lugar 5")}
                    disabled
                    aria-disabled="true"
                    tabIndex={-1}
                    className="bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    5
                  </button>
                </li>
              </div>
              <div>
                <li className="bg-orange-300 p-1 opacity-70 cursor-not-allowed">
                  <button
                    onClick={() => handleReserve("Lugar 6")}
                    disabled
                    aria-disabled="true"
                    tabIndex={-1}
                    className="bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    6
                  </button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 7")}>7</button>
                </li>
                <li className="bg-orange-300 p-1 opacity-70 cursor-not-allowed">
                  <button
                    onClick={() => handleReserve("Lugar 8")}
                    disabled
                    aria-disabled="true"
                    tabIndex={-1}
                    className="bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    8
                  </button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 9")}>9</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 10")}>10</button>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="bg-orange-200 p-2 absolute left-145 top-100">
          <h3>Espaço 11 ao 18</h3>
          <ul>
            <div className="flex flex-wrap">
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 11")}>11</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 12")}>12</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 13")}>13</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 14")}>14</button>
                </li>
              </div>
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 15")}>15</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 16")}>16</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 17")}>17</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 18")}>18</button>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="bg-orange-200 p-2 absolute left-190 top-100">
          <h3>Espaço 19 ao 26</h3>
          <ul>
            <div className="flex flex-wrap">
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 19")}>19</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 20")}>20</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 21")}>21</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 22")}>22</button>
                </li>
              </div>
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 23")}>23</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 24")}>24</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 25")}>25</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 26")}>26</button>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="bg-orange-200 p-2 absolute left-235 top-100">
          <h3>Espaço 27 ao 36</h3>
          <ul>
            <div className="flex flex-wrap">
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 27")}>27</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 28")}>28</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 29")}>29</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 30")}>30</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 31")}>31</button>
                </li>
              </div>
              <div>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 32")}>32</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 33")}>33</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 34")}>34</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 35")}>35</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 36")}>36</button>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="bg-orange-200 p-2 absolute right-100 bottom-60">
          <h3>Espaço 37 ao 42</h3>
          <ul>
            <div className="flex flex-col">
              <div className="flex">
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 37")}>37</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 38")}>38</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 39")}>39</button>
                </li>
              </div>
              <div className="flex">
                <li className="bg-orange-300 p-1 opacity-70 cursor-not-allowed">
                  <button
                    onClick={() => handleReserve("Lugar 40")}
                    disabled
                    aria-disabled="true"
                    tabIndex={-1}
                    className="bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    40
                  </button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 41")}>41</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 42")}>42</button>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="bg-orange-200 p-2 absolute right-10 bottom-60">
          <h3>Espaço 43 ao 52</h3>
          <ul>
            <div className="flex flex-col">
              <div className="flex">
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 43")}>43</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 44")}>44</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 45")}>45</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 46")}>46</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 47")}>47</button>
                </li>
              </div>
              <div className="flex">
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 48")}>48</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 49")}>49</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 50")}>50</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 51")}>51</button>
                </li>
                <li className="bg-orange-300 p-1">
                  <button onClick={() => handleReserve("Lugar 52")}>52</button>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;

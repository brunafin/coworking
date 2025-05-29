import "./App.css";

function App() {
  const handleReserve = (name: string) => {
    alert(`Reserva solicitada para: ${name}`);
  };

  return (
    <div>
      <h1 id="mapa-reservas-titulo">Mapa de Reservas</h1>
      <div className="bg-gray-200 font-bold p-2 w-7/10 h-20 absolute top-55 left-90">
        <p>Porta entrada</p>
      </div>
      <div className="bg-gray-200 font-bold p-2 h-20 absolute top-55 left-10">
        <p>Banheiros</p>
      </div>
      <div className="bg-gray-200 font-bold p-2 h-20 absolute top-55 right-20">
        <p>Banheiros</p>
      </div>
      <div className="bg-gray-200 font-bold p-2 w-7/10 absolute top-85 left-90 text-center">
        <p>Corredor</p>
      </div>
      <div className="bg-gray-200 font-bold p-2 w-4/10 absolute bottom-45 left-90 text-center">
        <p>Janelas</p>
      </div>
      <ol
        aria-label="Mapa de reservas de ambientes"
        aria-labelledby="mapa-reservas-titulo"
        role="list"
      >
        <li role="listitem">
          <section aria-labelledby="cocriacao-titulo">
            <h2 id="cocriacao-titulo" className="sr-only">
              Salas de Cocriação
            </h2>
            <ul aria-label="Salas de Cocriação" role="list">
              <li
                className="bg-yellow-300 p-2 h-40 absolute bottom-40 left-10"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Cocriação Wall-E")}
                  aria-label="Reservar sala de cocriação Wall-E"
                  role="button"
                >
                  Cocriação Wall-E
                </button>
              </li>
              <li
                className="bg-yellow-300 h-40 p-2 absolute top-90 right-10"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Cocriação EVA")}
                  aria-label="Reservar sala de cocriação EVA"
                  role="button"
                >
                  Cocriação EVA
                </button>
              </li>
            </ul>
          </section>
        </li>
        <li role="listitem">
          <section aria-labelledby="reuniao-titulo">
            <h2 id="reuniao-titulo" className="sr-only">
              Salas de Reunião
            </h2>
            <ul aria-label="Salas de Reunião" role="list">
              <li
                className="bg-blue-300 p-2 absolute top-60 left-40"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Reunião BB8")}
                  aria-label="Reservar sala de reunião BB8"
                  role="button"
                >
                  Reunião BB8
                </button>
              </li>
              <li
                className="bg-blue-300 p-2 h-25 absolute top-100 right-170"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Reunião R2D2")}
                  aria-label="Reservar sala de reunião R2D2"
                  role="button"
                >
                  Reunião R2D2
                </button>
              </li>
              <li
                className="bg-blue-300 p-2 h-40 border-3 border-blue-700 absolute top-130 right-170"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Reunião C3PO")}
                  aria-label="Reservar sala de reunião C3PO"
                  role="button"
                >
                  Reunião C3PO
                </button>
              </li>
              <li
                className="bg-blue-300 p-2 h-40 border-3 border-blue-700 absolute top-100 right-120"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Reunião Baymax")}
                  aria-label="Reservar sala de reunião Baymax"
                  role="button"
                >
                  Reunião Baymax
                </button>
              </li>
            </ul>
          </section>
        </li>
        <li role="listitem">
          <section aria-labelledby="compartilhados-titulo">
            <h2 id="compartilhados-titulo" className="sr-only">
              Espaços Compartilhados
            </h2>
            <ul aria-label="Espaços Compartilhados" role="list">
              <li
                className="bg-purple-300 p-2 absolute bottom-10 left-60"
                role="listitem"
              >
                <button
                  onClick={() => handleReserve("Deck")}
                  aria-label="Reservar espaço compartilhado Deck"
                  role="button"
                >
                  Deck
                </button>
              </li>
            </ul>
          </section>
        </li>
        <li role="listitem">
          <section aria-labelledby="individuais-titulo">
            <h2 id="individuais-titulo" className="sr-only">
              Espaços Individuais
            </h2>
            <ol
              aria-label="Listagem de mesas e lugares individuais"
              role="list"
            >
              {/* Espaço 1 ao 10 */}
              <li role="listitem">
                <div className="bg-orange-200 p-2 absolute left-90 top-100">
                  <h3 id="espaco-1-10-titulo">Espaço 1 ao 10</h3>
                  <ul
                    aria-label="Primeira mesa de lugares (Espaço 1 ao 10)"
                    role="list"
                  >
                    <div className="flex flex-wrap">
                      <div>
                        <li
                          className="bg-orange-300 p-1 relative group"
                          role="listitem"
                        >
                          <button
                            onClick={() => handleReserve("Lugar 1")}
                            aria-label="Reservar lugar 1"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            role="button"
                          >
                            1
                          </button>
                          <div
                            id="tooltip-lugar-1"
                            role="tooltip"
                            className="hidden group-hover:block group-focus-within:block absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white border border-gray-300 rounded shadow-lg p-2 text-xs z-10 w-60"
                            aria-live="polite"
                          >
                            <strong>Lugar 1</strong>
                            <ul>
                              <li>Com monitor</li>
                              <li>Próximo ao corredor</li>
                              <li>Próximo aos banheiros</li>
                            </ul>
                          </div>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 2")}
                            aria-label="Reservar lugar 2"
                            role="button"
                          >
                            2
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 3")}
                            aria-label="Reservar lugar 3"
                            role="button"
                          >
                            3
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 4")}
                            aria-label="Reservar lugar 4"
                            role="button"
                          >
                            4
                          </button>
                        </li>
                        <li
                          className="bg-orange-300 p-1 opacity-70 cursor-not-allowed"
                          role="listitem"
                        >
                          <button
                            onClick={() => handleReserve("Lugar 5")}
                            disabled
                            aria-disabled="true"
                            tabIndex={-1}
                            className="bg-gray-300 text-gray-500 cursor-not-allowed"
                            aria-label="Lugar 5 indisponível"
                            role="button"
                          >
                            5
                          </button>
                        </li>
                      </div>
                      <div>
                        <li
                          className="bg-orange-300 p-1 opacity-70 cursor-not-allowed"
                          role="listitem"
                        >
                          <button
                            onClick={() => handleReserve("Lugar 6")}
                            disabled
                            aria-disabled="true"
                            tabIndex={-1}
                            className="bg-gray-300 text-gray-500 cursor-not-allowed w-full"
                            aria-label="Lugar 6 indisponível"
                            role="button"
                          >
                            6
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 7")}
                            className="w-full"
                            aria-label="Reservar lugar 7"
                            role="button"
                          >
                            7
                          </button>
                        </li>
                        <li
                          className="bg-orange-300 p-1 opacity-70 cursor-not-allowed"
                          role="listitem"
                        >
                          <button
                            onClick={() => handleReserve("Lugar 8")}
                            disabled
                            aria-disabled="true"
                            tabIndex={-1}
                            className="bg-gray-300 text-gray-500 cursor-not-allowed w-full"
                            aria-label="Lugar 8 indisponível"
                            role="button"
                          >
                            8
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 9")}
                            className="w-full"
                            aria-label="Reservar lugar 9"
                            role="button"
                          >
                            9
                          </button>
                        </li>
                        <li
                          className="bg-orange-300 p-1 relative group"
                          role="listitem"
                        >
                          <button
                            onClick={() => handleReserve("Lugar 10")}
                            aria-label="Reservar lugar 10"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            role="button"
                          >
                            10
                          </button>
                          <div
                            id="tooltip-lugar-10"
                            role="tooltip"
                            className="hidden group-hover:block group-focus-within:block absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white border border-gray-300 rounded shadow-lg p-2 text-xs z-10 w-60"
                            aria-live="polite"
                          >
                            <strong>Lugar 10</strong>
                            <ul>
                              <li>Sem monitor</li>
                              <li>Ao lado da janela</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              {/* Espaço 11 ao 18 */}
              <li role="listitem">
                <div className="bg-orange-200 p-2 absolute left-130 top-100">
                  <h3 id="espaco-11-18-titulo">Espaço 11 ao 18</h3>
                  <ul
                    aria-label="Segunda mesa de lugares (Espaço 11 ao 18)"
                    role="list"
                  >
                    <div className="flex flex-wrap">
                      <div>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 11")}
                            aria-label="Reservar lugar 11"
                            role="button"
                          >
                            11
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 12")}
                            aria-label="Reservar lugar 12"
                            role="button"
                          >
                            12
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 13")}
                            aria-label="Reservar lugar 13"
                            role="button"
                          >
                            13
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 14")}
                            aria-label="Reservar lugar 14"
                            role="button"
                          >
                            14
                          </button>
                        </li>
                      </div>
                      <div>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 15")}
                            aria-label="Reservar lugar 15"
                            role="button"
                          >
                            15
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 16")}
                            aria-label="Reservar lugar 16"
                            role="button"
                          >
                            16
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 17")}
                            aria-label="Reservar lugar 17"
                            role="button"
                          >
                            17
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 18")}
                            aria-label="Reservar lugar 18"
                            role="button"
                          >
                            18
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              {/* Espaço 19 ao 26 */}
              <li role="listitem">
                <div className="bg-orange-200 p-2 absolute left-175 top-100">
                  <h3 id="espaco-19-26-titulo">Espaço 19 ao 26</h3>
                  <ul
                    aria-label="Terceira mesa de lugares (Espaço 19 ao 26)"
                    role="list"
                  >
                    <div className="flex flex-wrap">
                      <div>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 19")}
                            aria-label="Reservar lugar 19"
                            role="button"
                          >
                            19
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 20")}
                            aria-label="Reservar lugar 20"
                            role="button"
                          >
                            20
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 21")}
                            aria-label="Reservar lugar 21"
                            role="button"
                          >
                            21
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 22")}
                            aria-label="Reservar lugar 22"
                            role="button"
                          >
                            22
                          </button>
                        </li>
                      </div>
                      <div>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 23")}
                            aria-label="Reservar lugar 23"
                            role="button"
                          >
                            23
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 24")}
                            aria-label="Reservar lugar 24"
                            role="button"
                          >
                            24
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 25")}
                            aria-label="Reservar lugar 25"
                            role="button"
                          >
                            25
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 26")}
                            aria-label="Reservar lugar 26"
                            role="button"
                          >
                            26
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              {/* Espaço 27 ao 36 */}
              <li role="listitem">
                <div className="bg-orange-200 p-2 absolute left-215 top-100">
                  <h3 id="espaco-27-36-titulo">Espaço 27 ao 36</h3>
                  <ul
                    aria-label="Quarta mesa de lugares (Espaço 27 ao 36)"
                    role="list"
                  >
                    <div className="flex flex-wrap">
                      <div>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 27")}
                            aria-label="Reservar lugar 27"
                            role="button"
                          >
                            27
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 28")}
                            aria-label="Reservar lugar 28"
                            role="button"
                          >
                            28
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 29")}
                            aria-label="Reservar lugar 29"
                            role="button"
                          >
                            29
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 30")}
                            aria-label="Reservar lugar 30"
                            role="button"
                          >
                            30
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 31")}
                            aria-label="Reservar lugar 31"
                            role="button"
                          >
                            31
                          </button>
                        </li>
                      </div>
                      <div>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 32")}
                            aria-label="Reservar lugar 32"
                            role="button"
                          >
                            32
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 33")}
                            aria-label="Reservar lugar 33"
                            role="button"
                          >
                            33
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 34")}
                            aria-label="Reservar lugar 34"
                            role="button"
                          >
                            34
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 35")}
                            aria-label="Reservar lugar 35"
                            role="button"
                          >
                            35
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 36")}
                            aria-label="Reservar lugar 36"
                            role="button"
                          >
                            36
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              {/* Espaço 37 ao 42 */}
              <li role="listitem">
                <div className="bg-orange-200 p-2 absolute right-100 bottom-40">
                  <h3 id="espaco-37-42-titulo">Espaço 37 ao 42</h3>
                  <ul
                    aria-label="Quinta mesa de lugares (Espaço 37 ao 42)"
                    role="list"
                  >
                    <div className="flex flex-col">
                      <div className="flex">
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 37")}
                            aria-label="Reservar lugar 37"
                            role="button"
                          >
                            37
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 38")}
                            aria-label="Reservar lugar 38"
                            role="button"
                          >
                            38
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 39")}
                            aria-label="Reservar lugar 39"
                            role="button"
                          >
                            39
                          </button>
                        </li>
                      </div>
                      <div className="flex">
                        <li
                          className="bg-orange-300 p-1 opacity-70 cursor-not-allowed"
                          role="listitem"
                        >
                          <button
                            onClick={() => handleReserve("Lugar 40")}
                            disabled
                            aria-disabled="true"
                            tabIndex={-1}
                            className="bg-gray-300 text-gray-500 cursor-not-allowed"
                            aria-label="Lugar 40 indisponível"
                            role="button"
                          >
                            40
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 41")}
                            aria-label="Reservar lugar 41"
                            role="button"
                          >
                            41
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 42")}
                            aria-label="Reservar lugar 42"
                            role="button"
                          >
                            42
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              {/* Espaço 43 ao 52 */}
              <li role="listitem">
                <div className="bg-orange-200 p-2 absolute right-10 bottom-40">
                  <h3 id="espaco-43-52-titulo">Espaço 43 ao 52</h3>
                  <ul
                    aria-label="Sexta mesa de lugares (Espaço 43 ao 52)"
                    role="list"
                  >
                    <div className="flex flex-col">
                      <div className="flex">
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 43")}
                            aria-label="Reservar lugar 43"
                            role="button"
                          >
                            43
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 44")}
                            aria-label="Reservar lugar 44"
                            role="button"
                          >
                            44
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 45")}
                            aria-label="Reservar lugar 45"
                            role="button"
                          >
                            45
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 46")}
                            aria-label="Reservar lugar 46"
                            role="button"
                          >
                            46
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 47")}
                            aria-label="Reservar lugar 47"
                            role="button"
                          >
                            47
                          </button>
                        </li>
                      </div>
                      <div className="flex">
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 48")}
                            aria-label="Reservar lugar 48"
                            role="button"
                          >
                            48
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 49")}
                            aria-label="Reservar lugar 49"
                            role="button"
                          >
                            49
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 50")}
                            aria-label="Reservar lugar 50"
                            role="button"
                          >
                            50
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 51")}
                            aria-label="Reservar lugar 51"
                            role="button"
                          >
                            51
                          </button>
                        </li>
                        <li className="bg-orange-300 p-1" role="listitem">
                          <button
                            onClick={() => handleReserve("Lugar 52")}
                            aria-label="Reservar lugar 52"
                            role="button"
                          >
                            52
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            </ol>
          </section>
        </li>
      </ol>
    </div>
  );
}

export default App;

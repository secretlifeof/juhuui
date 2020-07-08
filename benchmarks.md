# Benchmarks

Benchmarks where run using a Benchmark tool created by the great peoples behind [Styled-Components](https://github.com/styled-components/styled-components/tree/master/packages/benchmarks).

The results definitely differ a bit on every benchmark run, so the results should be seen as a coarse direction.

## Computer

iMac (Retina 5K, 27-inch, Late 2015)  
3,2 GHz Quad-Core Intel Core i5  
24 GB 1867 MHz DDR3  
Chrome version 83.0.4103.116

## Versions

- Chakra-UI - 0.7.0
- Emotion-Styled - 10.0.12
- Juhuui - 0.1.0
- Otion 0.3.2
- Rebass - 4.0.7
- Styled-Components - 5.1.0

## Results

| Tool               | Mount deep tree(500) | Update dynamic styles(1000) |
| ------------------ | -------------------- | --------------------------- |
| Chakra-UI          | 26.92 ±17.71 ms      | 07.20 ±00.77 ms             |
| Emotion (styled)   | 13.58 ±01.26 ms      | 04.54 ±00.77 ms             |
| Juhuui (inline/UI) | 19.99 ±01.78 ms      | 05.93 ±01.12 ms             |
| Juhuui (css)       | 13.73 ±01.06 ms      | 03.92 ±01.16 ms             |
| Otion (css)        | 20.77 ±01.92 ms      | 06.40 ±02.00 ms             |
| Rebass             | 23.10 ±01.96 ms      | 28.07 ±08.75 ms             |
| Styled-Components  | 13.11 ±01.21 ms      | 04.16 ±00.85 ms             |

## Comment

Inline means styles are written inline. Css means classNames are created using the css function and then added to className prop.

import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis erat, in gravida sapien. Nam vestibulum imperdiet urna, at pharetra est maximus at. Nam lobortis justo eget lacus dapibus bibendum. Praesent nec felis sed erat tristique iaculis. Nam bibendum tortor ut fermentum vehicula. Praesent molestie lorem sollicitudin, commodo dolor non, lobortis lectus. Morbi blandit id odio sed suscipit. Suspendisse justo ligula, pellentesque ac ex eu, luctus dignissim orci. Donec nec nulla dolor. Aliquam maximus ante eu consequat auctor. Aliquam dui enim, vehicula eu gravida et, gravida sed mi. Proin et rutrum felis. In ac sollicitudin turpis.
<br><br>
Integer interdum metus eget leo viverra pellentesque a sed ex. Donec eu metus malesuada, auctor mauris non, consequat risus. Suspendisse potenti. Aliquam sed semper leo. Fusce non venenatis purus. Morbi et enim condimentum, condimentum tellus et, pharetra enim. Phasellus ac sagittis mi.
<br><br>
Donec eget lorem sed elit mattis pellentesque at nec nibh. Suspendisse nec leo velit. Aenean ornare in augue vitae tristique. Nulla facilisi. In a mi ligula. Nam accumsan gravida bibendum. Proin in efficitur lectus. Mauris vehicula sapien at justo pellentesque vehicula. Proin a varius tellus, in vehicula libero. Suspendisse a congue nibh, at ornare dui. Mauris non accumsan velit, at dictum nulla. Integer efficitur eget ligula vitae pretium. Integer fringilla dapibus nisi ut vestibulum. Nullam nec enim mi.
<br><br>
Phasellus faucibus, risus in porta mollis, lacus ligula sollicitudin ante, at dictum eros diam sit amet risus. Integer condimentum mattis massa sed aliquam. Donec eget ligula a ipsum viverra egestas nec et ante. Pellentesque vitae vestibulum eros. Integer tempor, dolor facilisis luctus aliquet, purus lorem fermentum massa, ac sollicitudin nibh diam eu tortor. Fusce bibendum urna erat, et tempus est dictum id. Phasellus pretium pellentesque ipsum nec vestibulum. Morbi pharetra nunc varius ullamcorper tristique. In ac tellus elit. Maecenas ullamcorper erat sed arcu posuere, vitae gravida elit luctus.
<br><br>
Suspendisse non metus id velit bibendum sollicitudin. Aenean non felis consequat, euismod massa id, bibendum libero. Quisque non leo ut purus fringilla sagittis. Vivamus fermentum sagittis ultrices. Nullam quis risus vel tortor pretium fringilla. Pellentesque rhoncus ex quis sapien dapibus convallis. Vestibulum quis nisi et purus lacinia congue. Etiam pellentesque arcu ac urna eleifend hendrerit. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis erat, in gravida sapien. Nam vestibulum imperdiet urna, at pharetra est maximus at. Nam lobortis justo eget lacus dapibus bibendum. Praesent nec felis sed erat tristique iaculis. Nam bibendum tortor ut fermentum vehicula. Praesent molestie lorem sollicitudin, commodo dolor non, lobortis lectus. Morbi blandit id odio sed suscipit. Suspendisse justo ligula, pellentesque ac ex eu, luctus dignissim orci. Donec nec nulla dolor. Aliquam maximus ante eu consequat auctor. Aliquam dui enim, vehicula eu gravida et, gravida sed mi. Proin et rutrum felis. In ac sollicitudin turpis.
<br><br>
Integer interdum metus eget leo viverra pellentesque a sed ex. Donec eu metus malesuada, auctor mauris non, consequat risus. Suspendisse potenti. Aliquam sed semper leo. Fusce non venenatis purus. Morbi et enim condimentum, condimentum tellus et, pharetra enim. Phasellus ac sagittis mi.
<br><br>
Donec eget lorem sed elit mattis pellentesque at nec nibh. Suspendisse nec leo velit. Aenean ornare in augue vitae tristique. Nulla facilisi. In a mi ligula. Nam accumsan gravida bibendum. Proin in efficitur lectus. Mauris vehicula sapien at justo pellentesque vehicula. Proin a varius tellus, in vehicula libero. Suspendisse a congue nibh, at ornare dui. Mauris non accumsan velit, at dictum nulla. Integer efficitur eget ligula vitae pretium. Integer fringilla dapibus nisi ut vestibulum. Nullam nec enim mi.
<br><br>
Phasellus faucibus, risus in porta mollis, lacus ligula sollicitudin ante, at dictum eros diam sit amet risus. Integer condimentum mattis massa sed aliquam. Donec eget ligula a ipsum viverra egestas nec et ante. Pellentesque vitae vestibulum eros. Integer tempor, dolor facilisis luctus aliquet, purus lorem fermentum massa, ac sollicitudin nibh diam eu tortor. Fusce bibendum urna erat, et tempus est dictum id. Phasellus pretium pellentesque ipsum nec vestibulum. Morbi pharetra nunc varius ullamcorper tristique. In ac tellus elit. Maecenas ullamcorper erat sed arcu posuere, vitae gravida elit luctus.
<br><br>
Suspendisse non metus id velit bibendum sollicitudin. Aenean non felis consequat, euismod massa id, bibendum libero. Quisque non leo ut purus fringilla sagittis. Vivamus fermentum sagittis ultrices. Nullam quis risus vel tortor pretium fringilla. Pellentesque rhoncus ex quis sapien dapibus convallis. Vestibulum quis nisi et purus lacinia congue. Etiam pellentesque arcu ac urna eleifend hendrerit. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis erat, in gravida sapien. Nam vestibulum imperdiet urna, at pharetra est maximus at. Nam lobortis justo eget lacus dapibus bibendum. Praesent nec felis sed erat tristique iaculis. Nam bibendum tortor ut fermentum vehicula. Praesent molestie lorem sollicitudin, commodo dolor non, lobortis lectus. Morbi blandit id odio sed suscipit. Suspendisse justo ligula, pellentesque ac ex eu, luctus dignissim orci. Donec nec nulla dolor. Aliquam maximus ante eu consequat auctor. Aliquam dui enim, vehicula eu gravida et, gravida sed mi. Proin et rutrum felis. In ac sollicitudin turpis.
<br><br>
Integer interdum metus eget leo viverra pellentesque a sed ex. Donec eu metus malesuada, auctor mauris non, consequat risus. Suspendisse potenti. Aliquam sed semper leo. Fusce non venenatis purus. Morbi et enim condimentum, condimentum tellus et, pharetra enim. Phasellus ac sagittis mi.
<br><br>
Donec eget lorem sed elit mattis pellentesque at nec nibh. Suspendisse nec leo velit. Aenean ornare in augue vitae tristique. Nulla facilisi. In a mi ligula. Nam accumsan gravida bibendum. Proin in efficitur lectus. Mauris vehicula sapien at justo pellentesque vehicula. Proin a varius tellus, in vehicula libero. Suspendisse a congue nibh, at ornare dui. Mauris non accumsan velit, at dictum nulla. Integer efficitur eget ligula vitae pretium. Integer fringilla dapibus nisi ut vestibulum. Nullam nec enim mi.
<br><br>
Phasellus faucibus, risus in porta mollis, lacus ligula sollicitudin ante, at dictum eros diam sit amet risus. Integer condimentum mattis massa sed aliquam. Donec eget ligula a ipsum viverra egestas nec et ante. Pellentesque vitae vestibulum eros. Integer tempor, dolor facilisis luctus aliquet, purus lorem fermentum massa, ac sollicitudin nibh diam eu tortor. Fusce bibendum urna erat, et tempus est dictum id. Phasellus pretium pellentesque ipsum nec vestibulum. Morbi pharetra nunc varius ullamcorper tristique. In ac tellus elit. Maecenas ullamcorper erat sed arcu posuere, vitae gravida elit luctus.
<br><br>
Suspendisse non metus id velit bibendum sollicitudin. Aenean non felis consequat, euismod massa id, bibendum libero. Quisque non leo ut purus fringilla sagittis. Vivamus fermentum sagittis ultrices. Nullam quis risus vel tortor pretium fringilla. Pellentesque rhoncus ex quis sapien dapibus convallis. Vestibulum quis nisi et purus lacinia congue. Etiam pellentesque arcu ac urna eleifend hendrerit. 
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

//funcion para hacer el calculo
const calcularScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log({scrollTop,scrollHeight,clientHeight});
    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
    // map(event => calcularScroll(event))
    map(calcularScroll),
    tap( console.log )
);

progress$.subscribe(procentaje => {
    progressBar.style.width = `${procentaje}%`;
});
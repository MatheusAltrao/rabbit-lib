<h1>🐰 Rabbit Component – <code>@matheusaltrao/rabbit-lib</code></h1>

<p>Um componente React animado e personalizável de coelho para usar em qualquer projeto. Ideal para dar um toque divertido à sua interface.</p>

<h2>🚀 Instalação</h2>
<pre><code>npm install @matheusaltrao/rabbit-lib
</code></pre>
<p>ou</p>
<pre><code>yarn add @matheusaltrao/rabbit-lib
</code></pre>

<h2>💡 Uso</h2>
<pre><code>import { Rabbit } from "@matheusaltrao/rabbit-lib";

function MyApp() {
return (
&lt;div&gt;
&lt;Rabbit /&gt;
&lt;/div&gt;
);
}
</code></pre>

<h2>⚙️ Props</h2>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Propriedade</th>
      <th>Tipo</th>
      <th>Padrão</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>size</code></td>
      <td><code>number</code></td>
      <td><code>1</code></td>
      <td>Escala do coelho (pode ser decimal, ex: <code>0.8</code>, <code>1.5</code> etc).</td>
    </tr>
    <tr>
      <td><code>colorSchema</code></td>
      <td><code>object</code></td>
      <td>-</td>
      <td>Permite personalizar as cores das partes do coelho. Veja abaixo.</td>
    </tr>
  </tbody>
</table>

<h3>🎨 <code>colorSchema</code> (opcional)</h3>
<pre><code>{
  leftFrontLag?: string;
  leftBackLag?: string;
  leftEar?: string;
  body?: string;
  head?: string;
  rightBackLag?: string;
  rightEar?: string;
  rightFrontLag?: string;
  tail?: string;
}
</code></pre>
<p>Você pode passar qualquer cor válida (hexadecimal, nome CSS, etc).</p>

<h2>🎯 Personalização Adicional</h2>
<p>Os <strong>olhos</strong> (<code>eye</code>) e o <strong>nariz</strong> (<code>nose</code>) possuem estilos fixos definidos diretamente no componente:</p>
<ul>
  <li><code>eye</code>: Cor padrão branca (<code>#ffffff</code>)</li>
  <li><code>nose</code>: Cor padrão rosa (<code>#F97996</code>)</li>
</ul>
<p>Se quiser alterar essas cores, você pode editar diretamente o componente <code>Rabbit.tsx</code>.</p>

<h2>📦 Importante</h2>
<p>Este componente foi desenvolvido com:</p>
<ul>
  <li>React 19</li>
  <li>Tailwind CSS</li>
  <li>Estilização inline e classes utilitárias</li>
  <li><code>use client</code> no topo (compatível com projetos Next.js App Router)</li>
</ul>

<h2>🧪 Desenvolvimento local</h2>
<p>Para testar o componente antes de publicar ou em desenvolvimento local:</p>
<pre><code>npm run dev</code></pre>
<p>O arquivo <code>App.tsx</code> existe apenas para testes locais e <strong>não é necessário</strong> para quem for consumir a lib.</p>

<h2>📝 Licença</h2>
<p><a href="./LICENSE">ISC</a></p>

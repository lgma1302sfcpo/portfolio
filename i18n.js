// Tradução PT ⇄ EN. O HTML fica em português; cada chave abaixo é o innerHTML
// original (espaços normalizados) e o valor é a versão em inglês.
const EN = {
  // Navegação e topo
  'Pular para o conteúdo': 'Skip to content',
  'Projetos': 'Projects',
  'Serviços': 'Services',
  'Experiência': 'Experience',
  'Stack': 'Stack',
  'Contato': 'Contact',

  // Hero
  '<i class="dot"></i> Disponível para projetos freelance e vagas CLT ou PJ': '<i class="dot"></i> Open to freelance projects and full-time or contract roles',
  'Desenvolvedor Full Stack que entrega <em>sistemas em produção.</em>': 'Full Stack Developer who ships <em>production software.</em>',
  'Desenvolvo sistemas web, plataformas SaaS e apps Android/iOS sob medida, do levantamento de requisitos ao deploy. ERPs com emissão de NF-e, agendamento com WhatsApp, e-commerce e marketplaces com Stripe, Pix e Mercado Pago.': 'I build custom web systems, SaaS platforms and Android/iOS apps, from requirements to deployment. ERPs with electronic invoicing (NF-e), WhatsApp scheduling, e-commerce and marketplaces with Stripe, Pix and Mercado Pago.',
  'Ver projetos <span aria-hidden="true">↓</span>': 'See projects <span aria-hidden="true">↓</span>',
  'Baixar currículo <span aria-hidden="true">↗</span>': 'Download resume <span aria-hidden="true">↗</span>',
  'Engenheiro da Computação · Santos, SP': 'Computer Engineer · Santos, Brazil',
  'anos com produtos digitais': 'years building digital products',
  'sistemas e sites entregues': 'systems and websites delivered',
  'e mobile, do front ao banco': 'and mobile, front end to database',

  // Projetos
  '01 · Projetos': '01 · Projects',
  'O que eu já <em>construí.</em>': 'What I have <em>built.</em>',
  'Sistemas entregues a clientes, produtos em produção e projetos próprios. Cada card mostra o que foi feito e com qual tecnologia.': 'Systems delivered to clients, products in production and personal projects. Each card shows what was built and with which technology.',
  'Todos': 'All',
  'Sistemas e SaaS': 'Systems & SaaS',
  'Sites e e-commerce': 'Websites & e-commerce',
  'Mobile': 'Mobile',

  'SaaS · Em produção com assinantes · 2026': 'SaaS · In production with subscribers · 2026',
  'Plataforma SaaS freemium de bem-estar que conecta pacientes a psicólogos com perfil verificado.': 'Freemium wellness SaaS platform that connects patients with verified psychologists.',
  'Assinaturas recorrentes com Stripe e área do assinante': 'Recurring subscriptions with Stripe and a subscriber area',
  'Cadastro de profissionais com envio de documentos e fluxo de verificação': 'Professional sign-up with document upload and a verification flow',
  'Busca de profissionais por especialidade, modalidade, cidade e valor, com mapa': 'Search by specialty, format, city and price, with a map',
  'Diário de humor, conteúdos premium, recursos de IA e painel administrativo': 'Mood journal, premium content, AI features and an admin dashboard',
  'Ver site ↗': 'Visit site ↗',

  'ERP · Entregue para clientes · 2026': 'ERP · Delivered to clients · 2026',
  'ERP para pet shops com emissão fiscal': 'Pet shop ERP with tax invoicing',
  'Sistema de gestão multiempresa usado no dia a dia de pet shops.': 'Multi-tenant management system used daily by pet shops.',
  'PDV, caixa, estoque, clientes e pets, financeiro e relatórios em PDF e Excel': 'POS, cash register, inventory, customers and pets, finance, and PDF/Excel reports',
  'Agenda de banho e tosa com cálculo automático do horário de término': 'Grooming schedule with automatic end-time calculation',
  'Emissão de NF-e e NFC-e com assinatura digital do XML (certificado A1)': 'Brazilian electronic invoices (NF-e/NFC-e) with digitally signed XML (A1 certificate)',
  'Usuários, cargos e permissões (RBAC), Clean Architecture e testes com Vitest': 'Users, roles and permissions (RBAC), Clean Architecture and Vitest tests',
  'Página do sistema ↗': 'Product page ↗',

  'Agendamento · Entregue para cliente · 2026': 'Scheduling · Delivered to client · 2026',
  'Agendamento online para barbearia: o cliente marca pelo site e o barbeiro confirma pelo painel ou pelo WhatsApp.': 'Online booking for a barbershop: customers book on the website and the barber confirms from the dashboard or WhatsApp.',
  'Fluxo público em 4 etapas, sem o cliente precisar criar conta': '4-step public flow, no customer account required',
  'WhatsApp Cloud API com botões, webhook validado com HMAC e outbox': 'WhatsApp Cloud API with buttons, HMAC-validated webhook and outbox pattern',
  'Sem agendamento duplo: transações SERIALIZABLE e exclusão com índice GiST': 'No double booking: SERIALIZABLE transactions and a GiST exclusion constraint',
  'Testes unitários, de integração e E2E no celular e no desktop com Playwright': 'Unit, integration and E2E tests on mobile and desktop with Playwright',
  'Ver demonstração ↗': 'View demo ↗',

  'Marketplace · Projeto · 2026': 'Marketplace · Project · 2026',
  'Marketplace de hotéis, creches e serviços pet com reserva e pagamento online.': 'Marketplace for pet hotels, daycares and services with online booking and payment.',
  'Busca de estabelecimentos por tipo de cuidado e região, com Google Maps': 'Search by type of care and area, with Google Maps',
  'Pagamento com cartão (Stripe) e Pix (Efí)': 'Card (Stripe) and Pix (Efí) payments',
  'Fotos em AWS S3 com URLs pré-assinadas e filas com BullMQ e Redis': 'Photos on AWS S3 with presigned URLs, and queues with BullMQ and Redis',

  'SaaS multiempresa para redes de pet shops: empresas, planos, lojas, PDV com pagamento dividido, agenda de banho e tosa e importação de dados.': 'Multi-tenant SaaS for pet shop chains: companies, plans, stores, POS with split payments, grooming schedule and data import.',
  'Site ↗': 'Site ↗',
  'Site + loja · Cliente · 2026': 'Website + store · Client · 2026',
  'Site com loja online: checkout com Stripe, frete, estoque atualizado por webhook após o pagamento e painel de pedidos.': 'Website with an online store: Stripe checkout, shipping, inventory updated by webhook after payment, and an orders dashboard.',
  'Delivery · Projeto · 2026': 'Delivery · Project · 2026',
  'Delivery para loja única': 'Single-store delivery app',
  'Cardápio online, carrinho, checkout com entrega ou retirada, pagamento com Mercado Pago e fila de pedidos da loja.': 'Online menu, cart, delivery or pickup checkout, Mercado Pago payments and a store order queue.',
  'Site · Cliente · 2026': 'Website · Client · 2026',
  'Site com catálogo de produtos, banho e tosa, páginas das lojas, WhatsApp e área administrativa para editar produtos.': 'Website with product catalog, grooming services, store pages, WhatsApp and an admin area to edit products.',
  'Landing page · Cliente · 2026': 'Landing page · Client · 2026',
  'Landing page com serviços, antes e depois, regiões atendidas, avaliações, FAQ, orçamento por WhatsApp e SEO local.': 'Landing page with services, before and after, service areas, reviews, FAQ, WhatsApp quotes and local SEO.',
  'App · Pet You Go! · 2022–2026': 'App · Pet You Go! · 2022–2026',
  'App de serviços pet': 'Pet services app',
  'App Android e iOS de hospedagem, creche e serviços pet: login social, reservas, pagamentos, mapas, upload de fotos e push.': 'Android and iOS app for pet boarding, daycare and services: social login, bookings, payments, maps, photo upload and push notifications.',
  'App · Offline-first · 2026': 'App · Offline-first · 2026',
  'Registro de compras e vendas com fotos que funciona sem internet e sincroniza com uma API multiempresa quando a conexão volta.': 'Purchase and sales logging with photos that works offline and syncs with a multi-tenant API when the connection is back.',
  'App · Tempo real · 2025': 'App · Real time · 2025',
  'App de mobilidade com mapas, geolocalização e posição em tempo real via Socket.io, com API própria e autenticação JWT.': 'Ride-hailing app with maps, geolocation and real-time position via Socket.io, with its own API and JWT authentication.',
  'App · Desafio técnico': 'App · Technical challenge',
  'Gestão de operações logísticas portuárias: CRUD, reordenação por arrastar e soltar, filtros e API mockada no Render.': 'Port logistics operations management: CRUD, drag-and-drop reordering, filters and a mock API on Render.',
  'TCC · IoT · 2026': 'Thesis · IoT · 2026',
  'Triagem e monitoramento de pacientes com pulseira ESP32, classificação de risco pelo Protocolo de Manchester e painel de acompanhamento.': 'Patient triage and monitoring with an ESP32 wristband, Manchester Triage System risk classification and a monitoring dashboard.',
  'Sistema web · PHP': 'Web system · PHP',
  'Gestão de Vendas': 'Sales Management',
  'Cadastro, edição e exclusão de vendas com geração de relatórios em PDF.': 'Create, edit and delete sales with PDF report generation.',
  'Sites · Negócios locais': 'Websites · Local businesses',
  'Mais landing pages': 'More landing pages',
  'Sites de conversão para churrascaria a domicílio, ar-condicionado, catálogo de veículos com painel de cadastro, esmaltaria e outros negócios locais.': 'Conversion-focused websites for a home barbecue caterer, air conditioning, a vehicle catalog with admin panel, a nail salon and other local businesses.',
  'Foco em contato pelo WhatsApp': 'Focused on WhatsApp contact',
  'SEO com sitemap, robots e metadados': 'SEO with sitemap, robots and metadata',
  'Animações com GSAP e Framer Motion': 'Animations with GSAP and Framer Motion',
  'Deploy contínuo na Vercel': 'Continuous deployment on Vercel',

  // Serviços
  '02 · Serviços': '02 · Services',
  'O que eu <em>entrego.</em>': 'What I <em>deliver.</em>',
  'Sistemas de gestão': 'Management systems',
  'PDV, caixa, estoque, financeiro, relatórios e emissão de NF-e e NFC-e.': 'POS, cash register, inventory, finance, reports and NF-e/NFC-e invoicing.',
  'Plataformas SaaS': 'SaaS platforms',
  'Assinaturas recorrentes, área do cliente, painel administrativo e multiempresa.': 'Recurring subscriptions, customer area, admin dashboard and multi-tenancy.',
  'Agendamento online': 'Online scheduling',
  'Agenda por profissional com confirmação automática pelo WhatsApp.': 'Per-professional calendars with automatic WhatsApp confirmation.',
  'E-commerce e marketplaces': 'E-commerce & marketplaces',
  'Checkout com Stripe, Pix e Mercado Pago, frete e controle de estoque.': 'Checkout with Stripe, Pix and Mercado Pago, shipping and inventory control.',
  'Apps Android e iOS': 'Android & iOS apps',
  'React Native com Expo, inclusive offline-first, publicados nas lojas.': 'React Native with Expo, including offline-first, published to the stores.',
  'Sites e landing pages': 'Websites & landing pages',
  'Rápidos, com SEO e foco em contato pelo WhatsApp.': 'Fast, SEO-ready and focused on WhatsApp contact.',

  // Experiência
  '03 · Experiência': '03 · Experience',
  'Onde eu já <em>trabalhei.</em>': 'Where I have <em>worked.</em>',
  'Abr 2026 — atual': 'Apr 2026 — present',
  'Freelancer · Remoto': 'Freelance · Remote',
  'Sistemas web, SaaS e sites sob medida para pequenos negócios: ERP com NF-e, agendamento com WhatsApp, marketplaces, e-commerce e landing pages, do requisito ao deploy.': 'Custom web systems, SaaS and websites for small businesses: ERP with NF-e invoicing, WhatsApp scheduling, marketplaces, e-commerce and landing pages, from requirements to deployment.',
  'Jan 2022 — Ago 2026': 'Jan 2022 — Aug 2026',
  'Desenvolvedor Front-end / Mobile': 'Front-end / Mobile Developer',
  'App React Native + Expo para Android e iOS, incluindo a reescrita da versão 2 com Expo Router, Zustand e EAS. Login com Google e Apple, reservas, pagamentos, mapas, upload de imagens e notificações push. Manutenção de telas administrativas em PHP/CakePHP.': 'React Native + Expo app for Android and iOS, including the v2 rewrite with Expo Router, Zustand and EAS. Google and Apple sign-in, bookings, payments, maps, image upload and push notifications. Maintenance of admin screens in PHP/CakePHP.',
  'Nov 2022 — Mai 2026': 'Nov 2022 — May 2026',
  'Desenvolvedor de Software': 'Software Developer',
  'Desenvolvimento de aplicações web e mobile, integração com APIs REST, testes e manutenção de funcionalidades.': 'Web and mobile application development, REST API integration, testing and feature maintenance.',
  'Xcelsz · Londres (remoto)': 'Xcelsz · London (remote)',
  'Aplicações web full stack, interfaces responsivas, consumo e desenvolvimento de APIs REST em equipe multidisciplinar.': 'Full stack web applications, responsive interfaces, and building and consuming REST APIs in a cross-functional team.',
  'Estágio em TI': 'IT Intern',
  'Apoio no desenvolvimento de aplicações web e Android, interfaces com HTML, CSS e JavaScript e integração com APIs REST.': 'Supported web and Android development, HTML/CSS/JavaScript interfaces and REST API integration.',
  'Desenvolvedor Full Stack': 'Full Stack Developer',

  // Stack
  '04 · Stack': '04 · Stack',
  'Ferramentas do <em>dia a dia.</em>': 'Everyday <em>tools.</em>',
  'Back-end': 'Back end',
  'Dados': 'Data',
  'Integrações': 'Integrations',
  'Qualidade e deploy': 'Quality & deployment',
  'Formação': 'Education',
  'Engenharia da Computação': 'Computer Engineering',
  'Bacharelado · Faculdade ESAMC Santos · 2021–2026': "Bachelor's degree · ESAMC Santos · 2021–2026",
  'Idiomas': 'Languages',
  'Inglês avançado': 'Advanced English',
  'Curso completo · CNA Idiomas': 'Completed course · CNA Idiomas',
  'Cursos': 'Courses',
  'Certificações': 'Certifications',
  'React Native (Android e iOS) · ISO 27001 · Lógica de Programação (Fundação Bradesco)': 'React Native (Android & iOS) · ISO 27001 · Programming Logic (Fundação Bradesco)',

  // Contato e rodapé
  '05 · Contato': '05 · Contact',
  'Tem um projeto ou uma vaga? <em>Vamos conversar.</em>': 'Have a project or a role? <em>Let’s talk.</em>',
  'Currículo (PDF) ↗': 'Resume (PDF) ↗',
  'Voltar ao topo ↑': 'Back to top ↑',
};

const EN_ATTR = {
  'Ir ao início': 'Go to top',
  'Navegação principal': 'Main navigation',
  'Navegação mobile': 'Mobile navigation',
  'Abrir menu': 'Open menu',
  'Fechar menu': 'Close menu',
  'Filtrar projetos': 'Filter projects',
  'Página inicial da Psicologia Conecta': 'Psicologia Conecta home page',
  'Página do sistema de gestão para pet shops': 'Pet shop management system page',
  'Tela de novo agendamento de banho e tosa no ERP': 'New grooming appointment screen in the ERP',
  'Tela de agendamento online da Atelier Barber': 'Atelier Barber online booking screen',
  'Página inicial do marketplace Reserva Pet': 'Reserva Pet marketplace home page',
  'Tela de login do PetFlow': 'PetFlow login screen',
  'Site da Barbershop WS': 'Barbershop WS website',
  'Cardápio online do sistema de delivery': 'Delivery system online menu',
  'Site da Casa dos Bichos Pet Shop': 'Casa dos Bichos Pet Shop website',
  'Landing page da R.E.B Telhados e Reformas': 'R.E.B Telhados & Reformas landing page',
  'Ilustração do app Pet You Go': 'Pet You Go app illustration',
  'Ilustração do app LançaSync': 'LançaSync app illustration',
  'Ilustração do app GoDriver': 'GoDriver app illustration',
  'Ilustração do app Operations Port': 'Operations Port app illustration',
  'Ilustração do sistema MedWatch': 'MedWatch system illustration',
  'Ilustração do sistema de gestão de vendas': 'Sales management system illustration',
};

const META = {
  pt: {
    title: 'Luiz Guilherme | Desenvolvedor Full Stack',
    description: document.querySelector('meta[name="description"]')?.content,
  },
  en: {
    title: 'Luiz Guilherme | Full Stack Developer',
    description: 'Portfolio of Luiz Guilherme Monteiro Arlindo, Full Stack Developer based in Santos, Brazil. Web systems, SaaS, ERPs, WhatsApp scheduling, e-commerce and React Native apps.',
  },
};

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const ATTRS = ['alt', 'aria-label'];
const textNodes = [];
const attrNodes = [];

// Guarda o original em português de cada elemento traduzível.
(function collect(root) {
  for (const el of root.children) {
    const key = norm(el.innerHTML);
    if (EN[key]) { textNodes.push([el, el.innerHTML, EN[key]]); continue; }
    collect(el);
  }
})(document.body);
document.querySelectorAll('[alt],[aria-label]').forEach((el) => {
  ATTRS.forEach((a) => { const v = el.getAttribute(a); if (v && EN_ATTR[v]) attrNodes.push([el, a, v, EN_ATTR[v]]); });
});

const langButtons = document.querySelectorAll('.lang-switch button');

function setLang(lang) {
  const en = lang === 'en';
  textNodes.forEach(([el, pt, eng]) => { el.innerHTML = en ? eng : pt; });
  attrNodes.forEach(([el, a, pt, eng]) => el.setAttribute(a, en ? eng : pt));
  document.documentElement.lang = en ? 'en' : 'pt-BR';
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', META[lang].description);
  langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('lang', lang); } catch (_) {}
  const url = new URL(location.href);
  if (en) url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
  history.replaceState(null, '', url);
  window.currentLang = lang;
}

// Ordem: ?lang= na URL, escolha salva, idioma do navegador.
let initial = new URLSearchParams(location.search).get('lang');
if (!initial) { try { initial = localStorage.getItem('lang'); } catch (_) {} }
if (!initial) initial = (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
setLang(initial === 'en' ? 'en' : 'pt');

langButtons.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

// Para conferir se toda chave encontrou um elemento na página.
window.__i18nMissing = () => Object.keys(EN).filter((k) => !textNodes.some(([, pt]) => norm(pt) === k));

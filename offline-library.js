const LIBRARY_TEXT={
 es:{
  offlineLabel:'DOCUMENTO INCLUIDO SIN CONEXIÓN',offlineManualTitle:'Ford Manual for Owners and Operators (1919)',downloadManual:'Descargar texto',doc1919Status:'Project Gutenberg · inglés · texto incluido y edición online',
  manualProvenance:'Ford Motor Company, 1919 · Project Gutenberg eBook 46206 · edición íntegra en texto inglés · aplicable únicamente a esta edición; verifica año, número de motor y equipamiento.',
  searchManual:'Buscar dentro de este manual disponible offline',searchPlaceholder:'p. ej., lubricating system',clearSearch:'Borrar',readManual:'Leer el manual completo sin conexión',
  gutenbergNotice:'Se conserva en el archivo el aviso y los términos incluidos en la edición.',sourceLabel:'Fuente del texto:',
  loadingManual:'Cargando el manual incluido…',manualReady:'Manual disponible sin conexión · {count} líneas.',manualLoadError:'No se pudo cargar el texto incluido. Comprueba que el paquete esté completo.',
  resultCount:'{count} resultados en el manual incluido.',noResults:'No hay coincidencias en el texto inglés de este manual.',resultMore:'Se muestran los primeros {count} resultados. Refina la búsqueda para acotar.',
  techLabel:'FICHA TÉCNICA CON FUENTE',techTitle:'Edición de 1919 · sistemas documentados',notTorque:'Sin pares Ford verificados',
  techApplicability:'La fuente es un manual Ford de 1919 para propietarios y conductores, no una especificación universal para todos los años o variantes Model T. Las referencias indican capítulo y página impresa para verificar cada tema.',
  engineTransmission:'Motor y transmisión',refEngine:'Motor, cap. p. 9; transmisión, cap. p. 31; eje trasero, p. 37.',
  ignitionFuel:'Encendido y combustible',refIgnition:'Sistema de gasolina, cap. p. 21; sistema de encendido, cap. p. 25.',
  coolingLubrication:'Refrigeración y lubricación',refCooling:'Sistema de refrigeración, cap. p. 17; sistema de lubricación, cap. p. 46.',
  chassisBrakes:'Tren de rodaje y mantenimiento',refChassis:'Tren de rodaje, cap. p. 40; mantenimiento, cap. p. 50. Consulta el manual para procedimientos aplicables al año.',
  torqueNote:'El manual de 1919 no da pares de apriete. La cifra siguiente procede de un artículo secundario sobre una modificación concreta y no es una especificación Ford.',
  torqueLabel:'Valor comunicado en un informe (convertido)',torqueComponent:'Pernos de culata',
  torqueScope:'Un artículo de restauración de 2019 comunica este valor para su Runabout de 1917 con una culata de aluminio de alta compresión no original. No es una especificación de fábrica Ford.',
  torqueSource:'Royce Peterson, Model T Ford Fix · 24 feb. 2019 ↗',
  torqueWarning:'Referencia limitada a esa configuración descrita, no valor general Model T. No aplicarla a culata original ni a tornillería desconocida: material, estado de pernos, roscas, arandelas y lubricación pueden cambiar la idoneidad.',
  vehiclePhotoLabel:'Foto de tu vehículo (opcional)',vehiclePhotoHelp:'Se guarda solo en este dispositivo y sustituye la ilustración. Elimínala para volver al dibujo de época.',
  useIllustration:'Usar ilustración de época',vehiclePhotoStored:'Foto guardada en este dispositivo',vehiclePhotoMissing:'No se encuentra la foto en este dispositivo; la copia JSON no incluye imágenes.',
  vehiclePhotoSaveError:'No se pudo guardar o eliminar la foto del vehículo.',vehiclePhotoSaved:'Foto del vehículo guardada',vehiclePhotoCleared:'Ilustración de época restaurada',
  vehiclePhotoAlt:'Foto del Model T de este perfil',vehicleIllustrationAlt:'Grabado de época de un Ford Model T Torpedo, tomado de un anuncio de 1909',
  credits:'Creada por Jose David Galiano · Dedicada con cariño a Vicente.',
  yearMatch:'Ficha del vehículo: {year}, {body}. La edición corresponde al año de perfil, pero verifica siempre número de motor, carrocería y equipamiento.',
  yearMismatch:'Ficha del vehículo: {year}, {body}. La documentación mostrada es de 1919 y no debe aplicarse a este vehículo sin una fuente válida para su año.',
  restParts:'Piezas y referencias',restRefs:'Fuentes / referencias',restPhotos:'Fotografías del trabajo',restRefsPlaceholder:'Manual, página, archivo, URL, proveedor…',
  photoSaveError:'No se pudieron guardar las fotos de restauración.',photoLoadError:'No se pudieron cargar las fotos de restauración.',photoDeleteError:'No se pudieron eliminar las fotos de restauración.',
  resultAt:'Línea {line}',openResult:'Ir al resultado'
 },
 en:{
  offlineLabel:'INCLUDED OFFLINE',offlineManualTitle:'Ford Manual for Owners and Operators (1919)',downloadManual:'Download text',doc1919Status:'Project Gutenberg · English · bundled text and online edition',
  manualProvenance:'Ford Motor Company, 1919 · Project Gutenberg eBook 46206 · complete English plain-text edition · applicable to this edition only; verify year, engine number and equipment.',
  searchManual:'Search inside this offline manual',searchPlaceholder:'e.g. lubricating system',clearSearch:'Clear',readManual:'Read the full manual offline',
  gutenbergNotice:'The edition’s included notice and terms are preserved in the text file.',sourceLabel:'Text source:',
  loadingManual:'Loading the included manual…',manualReady:'Manual available offline · {count} lines.',manualLoadError:'Could not load the included text. Check that the app package is complete.',
  resultCount:'{count} matches in the included manual.',noResults:'No matches in this manual’s English text.',resultMore:'Showing the first {count} matches. Refine the query to narrow results.',
  techLabel:'SOURCE-BASED TECHNICAL SHEET',techTitle:'1919 edition · systems documented',notTorque:'No Ford torque spec verified',
  techApplicability:'The source is a 1919 Ford owner/operator manual, not a universal specification for all Model T years or variants. References identify the printed chapter and page for checking each topic.',
  engineTransmission:'Engine & transmission',refEngine:'Engine, ch. p. 9; transmission, ch. p. 31; rear axle, p. 37.',
  ignitionFuel:'Ignition & fuel',refIgnition:'Gasoline system, ch. p. 21; ignition system, ch. p. 25.',
  coolingLubrication:'Cooling & lubrication',refCooling:'Cooling system, ch. p. 17; lubricating system, ch. p. 46.',
  chassisBrakes:'Running gear & maintenance',refChassis:'Running gear, ch. p. 40; maintenance, ch. p. 50. Consult the manual for year-specific procedures.',
  torqueNote:'The 1919 manual gives no tightening torques. The value below comes from a secondary report about one modified car and is not a Ford specification.',
  torqueLabel:'Value reported in one account (converted)',torqueComponent:'Cylinder-head bolts',
  torqueScope:'A 2019 restoration article reports this value for its 1917 Runabout fitted with an aftermarket aluminum high-compression head. It is not a Ford factory specification.',
  torqueSource:'Royce Peterson, Model T Ford Fix · 24 Feb 2019 ↗',
  torqueWarning:'This is specific to the reported setup, not a general Model T value. Do not apply it to a stock head or unknown fasteners: material, bolt condition, threads, washers and lubrication affect suitability.',
  vehiclePhotoLabel:'Photo of your vehicle (optional)',vehiclePhotoHelp:'Stored only on this device and replaces the illustration. Clear it to restore the period drawing.',
  useIllustration:'Use period illustration',vehiclePhotoStored:'Photo stored on this device',vehiclePhotoMissing:'Photo not found in this device storage; JSON backups do not include images.',
  vehiclePhotoSaveError:'Could not save or remove the vehicle photo.',vehiclePhotoSaved:'Vehicle photo saved',vehiclePhotoCleared:'Period illustration restored',
  vehiclePhotoAlt:'Photo of the Model T in this profile',vehicleIllustrationAlt:'1909 Ford advertisement engraving of a Model T Torpedo',
  credits:'Created by Jose David Galiano · Dedicated with affection to Vicente.',
  yearMatch:'Vehicle profile: {year}, {body}. The edition matches the profile year; still verify engine number, body and equipment.',
  yearMismatch:'Vehicle profile: {year}, {body}. The displayed documentation is from 1919 and must not be applied to this car without a year-matched source.',
  restParts:'Parts / references',restRefs:'Sources / references',restPhotos:'Work photos',restRefsPlaceholder:'Manual, page, archive, URL, supplier…',
  photoSaveError:'Could not save restoration photos.',photoLoadError:'Could not load restoration photos.',photoDeleteError:'Could not delete restoration photos.',
  resultAt:'Line {line}',openResult:'Go to result'
 },
 fr:{
  offlineLabel:'DOCUMENT INCLUS HORS LIGNE',offlineManualTitle:'Ford Manual for Owners and Operators (1919)',downloadManual:'Télécharger le texte',doc1919Status:'Project Gutenberg · anglais · texte inclus et édition en ligne',
  manualProvenance:'Ford Motor Company, 1919 · Project Gutenberg eBook 46206 · édition intégrale en texte anglais · applicable à cette édition seulement ; vérifier l’année, le numéro moteur et l’équipement.',
  searchManual:'Rechercher dans ce manuel hors ligne',searchPlaceholder:'p. ex. lubricating system',clearSearch:'Effacer',readManual:'Lire le manuel complet hors ligne',
  gutenbergNotice:'L’avis et les conditions inclus dans l’édition sont conservés dans le fichier.',sourceLabel:'Source du texte :',
  loadingManual:'Chargement du manuel inclus…',manualReady:'Manuel disponible hors ligne · {count} lignes.',manualLoadError:'Impossible de charger le texte inclus. Vérifiez que le paquet est complet.',
  resultCount:'{count} résultats dans le manuel inclus.',noResults:'Aucune correspondance dans le texte anglais de ce manuel.',resultMore:'Affichage des {count} premiers résultats. Affinez la recherche.',
  techLabel:'FICHE TECHNIQUE SOURCÉE',techTitle:'Édition 1919 · systèmes documentés',notTorque:'Aucun couple Ford vérifié',
  techApplicability:'La source est un manuel Ford de 1919 destiné aux propriétaires et conducteurs, et non une spécification universelle de toutes les années et variantes Model T. Les références indiquent le chapitre et la page imprimée à vérifier.',
  engineTransmission:'Moteur et transmission',refEngine:'Moteur, chap. p. 9 ; transmission, chap. p. 31 ; pont arrière, p. 37.',
  ignitionFuel:'Allumage et carburant',refIgnition:'Système d’essence, chap. p. 21 ; allumage, chap. p. 25.',
  coolingLubrication:'Refroidissement et lubrification',refCooling:'Refroidissement, chap. p. 17 ; lubrification, chap. p. 46.',
  chassisBrakes:'Train roulant et entretien',refChassis:'Train roulant, chap. p. 40 ; entretien, chap. p. 50. Vérifier les procédures applicables à l’année dans le manuel.',
  torqueNote:'Le manuel de 1919 ne donne pas de couples de serrage. La valeur ci-dessous vient d’un article secondaire sur une modification précise et ne constitue pas une spécification Ford.',
  torqueLabel:'Valeur rapportée (convertie)',torqueComponent:'Boulons de culasse',
  torqueScope:'Un article de restauration de 2019 rapporte cette valeur pour son Runabout de 1917 équipé d’une culasse haute compression en aluminium non d’origine. Ce n’est pas une spécification d’usine Ford.',
  torqueSource:'Royce Peterson, Model T Ford Fix · 24 févr. 2019 ↗',
  torqueWarning:'Référence limitée à cette configuration, et non valeur générale du Model T. Ne pas l’appliquer à une culasse d’origine ou à des boulons inconnus : matériau, état des boulons, filetage, rondelles et lubrification influent sur son adéquation.',
  vehiclePhotoLabel:'Photo de votre véhicule (facultative)',vehiclePhotoHelp:'Conservée uniquement sur cet appareil et remplace l’illustration. Supprimez-la pour rétablir le dessin d’époque.',
  useIllustration:'Utiliser l’illustration d’époque',vehiclePhotoStored:'Photo enregistrée sur cet appareil',vehiclePhotoMissing:'Photo introuvable sur cet appareil ; les sauvegardes JSON ne contiennent pas les images.',
  vehiclePhotoSaveError:'Impossible d’enregistrer ou de supprimer la photo du véhicule.',vehiclePhotoSaved:'Photo du véhicule enregistrée',vehiclePhotoCleared:'Illustration d’époque rétablie',
  vehiclePhotoAlt:'Photo du Model T de cette fiche',vehicleIllustrationAlt:'Gravure publicitaire Ford de 1909 représentant un Model T Torpedo',
  credits:'Créée par Jose David Galiano · Dédiée avec affection à Vicente.',
  yearMatch:'Fiche du véhicule : {year}, {body}. L’édition correspond à l’année du profil ; vérifier tout de même le numéro moteur, la carrosserie et l’équipement.',
  yearMismatch:'Fiche du véhicule : {year}, {body}. La documentation affichée date de 1919 ; ne pas l’appliquer sans source correspondant à l’année du véhicule.',
  restParts:'Pièces et références',restRefs:'Sources / références',restPhotos:'Photos des travaux',restRefsPlaceholder:'Manuel, page, archive, URL, fournisseur…',
  photoSaveError:'Impossible d’enregistrer les photos de restauration.',photoLoadError:'Impossible de charger les photos de restauration.',photoDeleteError:'Impossible de supprimer les photos de restauration.',
  resultAt:'Ligne {line}',openResult:'Afficher le résultat'
 }
};

const manualSearch=document.getElementById('manualSearch');
const manualResults=document.getElementById('manualSearchResults');
const manualStatus=document.getElementById('manualSearchStatus');
const manualContent=document.getElementById('manualContent');
let manualText='';
let manualLines=[];
let readerRendered=false;

function libraryLanguage(){
 return libraryData().vehicle?.language||'es';
}
function libraryData(){try{return JSON.parse(localStorage.getItem('model-t-garage-v1')||'{}')}catch{return{}}}
function libraryString(key,values={}){
 let language=LIBRARY_TEXT[libraryLanguage()]||LIBRARY_TEXT.es;
 return (language[key]||LIBRARY_TEXT.es[key]||key).replace(/\{(\w+)\}/g,(_,name)=>values[name]??'');
}
window.offlineText=libraryString;
window.applyOfflineLibraryTranslations=function(){
 document.querySelectorAll('[data-lib-i18n]').forEach(el=>{el.textContent=libraryString(el.dataset.libI18n)});
 document.querySelectorAll('[data-lib-alt]').forEach(el=>{el.alt=libraryString(el.dataset.libAlt)});
 document.querySelectorAll('[data-lib-label]').forEach(el=>{el.textContent=libraryString(el.dataset.libLabel)});
 document.querySelectorAll('[data-lib-placeholder]').forEach(el=>{el.placeholder=libraryString(el.dataset.libPlaceholder)});
 const profile={year:'1911',body:'roadster',...libraryData().vehicle};
 const bodies={roadster:{es:'Roadster con asiento trasero',en:'Roadster with rear seat',fr:'Roadster avec siège arrière'},runabout:{es:'Runabout',en:'Runabout',fr:'Runabout'},touring:{es:'Touring',en:'Touring',fr:'Touring'},coupe:{es:'Coupé',en:'Coupe',fr:'Coupé'},towncar:{es:'Town Car',en:'Town Car',fr:'Town Car'},delivery:{es:'Reparto/comercial',en:'Delivery/commercial',fr:'Livraison/utilitaire'}};
 const body=(bodies[profile.body]||{})[libraryLanguage()]||profile.body||'—';
 const year=String(profile.year||'—');
 document.getElementById('techYearNotice').textContent=libraryString(Number(year)===1919?'yearMatch':'yearMismatch',{year,body});
 if(manualText&&manualSearch.value.trim())showMatches(manualSearch.value);
 else if(manualText)manualStatus.textContent=libraryString('manualReady',{count:manualLines.length.toLocaleString()});
};
function normalized(value){return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
async function loadManual(){
 if(manualText)return;
 manualStatus.textContent=libraryString('loadingManual');
 const response=await fetch('./documents/ford-manual-1919.txt');
 if(!response.ok)throw new Error(`Manual request failed: ${response.status}`);
 manualText=await response.text();
 manualLines=manualText.split(/\r?\n/);
 manualStatus.textContent=libraryString('manualReady',{count:manualLines.length.toLocaleString()});
}
function buildReader(){
 if(readerRendered)return;
 manualContent.innerHTML=manualLines.map((line,index)=>`<span id="manual-line-${index+1}">${line.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}</span>`).join('\n');
 readerRendered=true;
}
function showMatches(query){
 manualResults.replaceChildren();
 if(!query.trim())return;
 const needle=normalized(query.trim());
 const found=[];
 for(let index=0;index<manualLines.length&&found.length<51;index++){
  const line=manualLines[index];
  if(normalized(line).includes(needle))found.push({line:index+1,text:line.trim()});
 }
 const shown=found.slice(0,50);
 if(!shown.length){manualStatus.textContent=libraryString('noResults');return}
 manualStatus.textContent=libraryString('resultCount',{count:found.length>50?'50+':found.length});
 shown.forEach(match=>{
  const item=document.createElement('li');
  const button=document.createElement('button');
  button.type='button';
  button.className='manual-result';
  button.innerHTML=`<small>${libraryString('resultAt',{line:match.line})}</small><span></span>`;
  button.querySelector('span').textContent=match.text||'…';
  button.addEventListener('click',()=>{
   const reader=document.getElementById('manualReader');
   buildReader();
   reader.open=true;
   document.getElementById(`manual-line-${match.line}`)?.scrollIntoView({block:'center'});
  });
  item.append(button);
  manualResults.append(item);
 });
 if(found.length>50){const more=document.createElement('li');more.className='manual-status';more.textContent=libraryString('resultMore',{count:50});manualResults.append(more)}
}
let searchTimer;
manualSearch.addEventListener('input',()=>{
 clearTimeout(searchTimer);
 searchTimer=setTimeout(async()=>{
  if(!manualSearch.value.trim()){manualResults.replaceChildren();manualStatus.textContent=manualText?libraryString('manualReady',{count:manualLines.length.toLocaleString()}):'';return}
  try{await loadManual();showMatches(manualSearch.value)}
  catch(error){console.error(error);manualStatus.textContent=libraryString('manualLoadError')}
 },120);
});
document.getElementById('clearManualSearch').addEventListener('click',()=>{
 manualSearch.value='';
 manualResults.replaceChildren();
 manualStatus.textContent=manualText?libraryString('manualReady',{count:manualLines.length.toLocaleString()}):'';
});
document.getElementById('manualReader').addEventListener('toggle',async event=>{
 if(!event.target.open||readerRendered)return;
 try{await loadManual();buildReader()}
 catch(error){console.error(error);manualStatus.textContent=libraryString('manualLoadError')}
});
document.getElementById('language').addEventListener('change',window.applyOfflineLibraryTranslations);
window.applyOfflineLibraryTranslations();

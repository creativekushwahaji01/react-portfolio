import React from 'react';
import { useState } from 'react';
import '../App.css'

function LanguageProgress() {
  const maxHeight =800
  const [showAll, setShowAll] = useState(false);
  const visibleLanguages = showAll ? languages : languages.slice(0, 5);
   // Change 5 to your desired initial visible count

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const languages = [
    { name: 'HTML', progress: 95, imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>' },
    { name: 'CSS', progress: 85, imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>' },
    { name: 'JavaScript', progress: 75,imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>' },
    { name: 'React', progress: 85, imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48"><g id="surface103676415"><path style="stroke:none;fill-rule:nonzero;fill:#61dafb;fill-opacity:1" d="M 24 34 C 11.101562 34 1 29.601562 1 24 C 1 18.398438 11.101562 14 24 14 C 36.898438 14 47 18.398438 47 24 C 47 29.601562 36.898438 34 24 34 Z M 24 16 C 11.398438 16 3 20.101562 3 24 C 3 27.898438 11.398438 32 24 32 C 36.601562 32 45 27.898438 45 24 C 45 20.101562 36.601562 16 24 16 Z M 24 16"/><path style="stroke:none;fill-rule:nonzero;fill:#61dafb;fill-opacity:1" d="M 15.101562 44.601562 C 14.101562 44.601562 13.300781 44.398438 12.5 43.898438 C 7.601562 41.101562 8.898438 30.199219 15.300781 19 C 18.300781 13.800781 22 9.398438 25.601562 6.601562 C 29.5 3.601562 33 2.699219 35.398438 4.101562 C 37.898438 5.5 38.800781 9 38.199219 13.898438 C 37.601562 18.5 35.601562 23.898438 32.601562 29.101562 C 29.601562 34.300781 25.898438 38.699219 22.300781 41.5 C 19.699219 43.5 17.199219 44.601562 15.101562 44.601562 Z M 32.898438 5.398438 C 31.300781 5.398438 29.199219 6.300781 26.898438 8.101562 C 23.5 10.800781 20 15 17.101562 20 C 10.800781 30.898438 10.199219 40.300781 13.5 42.199219 C 15.199219 43.199219 18 42.300781 21.101562 39.898438 C 24.5 37.199219 28 33 30.898438 28 C 33.800781 23 35.699219 17.898438 36.300781 13.601562 C 36.800781 9.601562 36.199219 6.800781 34.5 5.800781 C 34 5.601562 33.5 5.398438 32.898438 5.398438 Z M 32.898438 5.398438"/><path style="stroke:none;fill-rule:nonzero;fill:#61dafb;fill-opacity:1" d="M 33 44.601562 C 28 44.601562 20.800781 38.5 15.398438 29 C 8.898438 17.800781 7.601562 6.898438 12.5 4.101562 C 17.398438 1.300781 26.199219 7.800781 32.699219 19 C 35.699219 24.199219 37.699219 29.601562 38.300781 34.199219 C 39 39.101562 38 42.5 35.5 44 C 34.699219 44.398438 33.898438 44.601562 33 44.601562 Z M 13.5 5.800781 C 10.199219 7.699219 10.800781 17.101562 17.101562 28 C 23.398438 38.898438 31.199219 44.101562 34.5 42.199219 C 36.199219 41.199219 36.800781 38.398438 36.300781 34.398438 C 35.699219 30.101562 33.800781 25 30.898438 20 C 24.601562 9.101562 16.800781 3.898438 13.5 5.800781 Z M 13.5 5.800781"/><path style="stroke:none;fill-rule:nonzero;fill:#61dafb;fill-opacity:1" d="M 28 24 C 28 26.210938 26.210938 28 24 28 C 21.789062 28 20 26.210938 20 24 C 20 21.789062 21.789062 20 24 20 C 26.210938 20 28 21.789062 28 24 Z M 28 24"/></g></svg>' },
    // { name: 'Python', progress: 70,imageSvg: '' },
    { name: 'mysql', progress: 90,imageSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"/><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"/><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"/><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"/><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"/><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"/><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"/></svg>' },
    { name: 'mongodb', progress: 70, imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"/><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"/><path fill="#dcedc8" d="M23 28H25V36H23z"/><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"/><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"/></svg>'},
    { name: 'Nodejs', progress: 55,imageSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"/><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"/><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"/><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"/><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"/></svg>' },
    
    {name: 'Git', progress: 85,imageSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"/></svg>'},
    {name:'Python',progress:85,imageSvg:'<svg width="50px" height="50Px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="-133.268" y1="-202.91" x2="-133.198" y2="-202.84" gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="-133.575" y1="-203.203" x2="-133.495" y2="-203.133" gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient></defs><title>file_type_python</title><path d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z" style="fill:url(#a)"/><path d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z" style="fill:url(#b)"/></svg>'},
    {name:"C",progress:60,imageSvg:'<svg viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997" xmlns="http://www.w3.org/2000/svg" width="2113" height="2500"><path d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z" fill="#004482"/><path d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z" fill="#00599c"/><path d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z" fill="#659ad2"/><path d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z" fill="#fff"/></svg>'},
    {name:'C++',progress:60,imageSvg:'<svg width="2222" height="2500" viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#5C8DBC"/><path d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074" fill="#1A4674"/><path d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352" fill="#1A4674"/><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#1B598E"/><path d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721" fill="#FFF"/><path d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371" fill="#FFF"/></svg>'},
    {name:'Express JS',progress:80,imageSvg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>'},
    {name:'Postman',progress:90,imageSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-13.58674873666481 -3.5096047119942106 81.71274873666479 72.05384966725056"><style>.C{fill:#ff6c37}.D{fill:#fff}</style><path d="M57.327 12.44a32 32 0 1 0-5.761 44.88c13.98-10.804 16.56-30.895 5.76-44.88z" class="C"/><path d="M42.793 20.388L29.3 33.988l-3.813-3.92c13.28-13.28 14.613-12.08 17.307-9.68z" class="D"/><path d="M29.3 34.36a.48.48 0 0 1-.32-.133l-3.84-3.84a.48.48 0 0 1 0-.667c13.093-13.093 14.88-12.48 17.973-9.68a.427.427 0 0 1 .16.347c.02.13-.03.263-.133.347L29.647 34.228a.506.506 0 0 1-.347.133zm-3.147-4.293l3.147 3.147 12.8-12.8a2.88 2.88 0 0 0-3.787-.64c-2.32 1.04-6.053 4.213-12.16 10.293z" class="C"/><path d="M33.167 37.748l-3.68-3.76L42.98 20.654c3.627 3.547-1.76 9.467-9.813 17.093z" class="D"/><path d="M33.167 38.228a.56.56 0 0 1-.32-.133l-3.76-3.68a.56.56 0 0 1 0-.427.517.517 0 0 1 0-.347L42.58 20.148a.506.506 0 0 1 .693 0 4.136 4.136 0 0 1 1.333 3.173c0 3.6-4.107 8.133-11.093 14.747a.56.56 0 0 1-.347.16zm-2.987-4.24L33.193 37c5.333-5.04 10.427-10.24 10.453-13.76a3.04 3.04 0 0 0-.693-2.053z" class="C"/><path d="M25.593 30.148l2.667 2.667a.16.16 0 0 1 0 .24l-5.627 1.2a.533.533 0 0 1-.48-.907l3.28-3.253s.107 0 .16.053z" class="D"/><path d="M22.5 34.788a1.04 1.04 0 0 1-.88-.507 1.014 1.014 0 0 1 .187-1.2l3.253-3.28a.64.64 0 0 1 .853 0l2.667 2.667c.158.15.22.377.16.587s-.236.377-.453.427l-5.627 1.2zm2.987-4.053l-3.013 3.013 4.987-1.067zm.24-.24z" class="C"/><path d="M49.967 12.894c-1.93-1.862-4.962-1.94-6.986-.183s-2.37 4.773-.794 6.943 4.547 2.778 6.847 1.4l-3.627-3.627z" class="D"/><path d="M46.367 22.28a5.65 5.65 0 0 1-5.156-3.508 5.667 5.667 0 0 1 1.2-6.118 5.71 5.71 0 0 1 8 0c.102.086.16.213.16.347a.46.46 0 0 1-.16.347l-4.32 4.08 3.28 3.227a.45.45 0 0 1 .133.4.48.48 0 0 1-.213.347 5.8 5.8 0 0 1-2.933.88zm0-10.347c-1.9.01-3.6 1.153-4.313 2.9s-.325 3.758 1.007 5.1a4.665 4.665 0 0 0 5.173.987l-3.147-3.147a.427.427 0 0 1 0-.667l4.16-4.187a4.785 4.785 0 0 0-2.88-.987z" class="C"/><path d="M50.047 12.974l-4.56 4.533 3.627 3.627a5.52 5.52 0 0 0 1.013-.747 5.333 5.333 0 0 0-.08-7.413z" class="D"/><path d="M49.033 21.534a.4.4 0 0 1-.32-.133l-3.627-3.627a.427.427 0 0 1 0-.667l4.533-4.453a.48.48 0 0 1 .8 0 5.6 5.6 0 0 1 0 8 4.88 4.88 0 0 1-1.067.853.43.43 0 0 1-.32.027zM46.1 17.428l3.013 3.013a5.12 5.12 0 0 0 .587-.48 4.72 4.72 0 0 0 1.387-3.333 4.58 4.58 0 0 0-1.147-3.04z" class="C"/><path d="M43.353 20.948a1.948 1.948 0 0 0-2.667 0L28.607 33l2 2.027 12.773-11.2a1.977 1.977 0 0 0-.027-2.88z" class="D"/><path d="M30.5 35.508a.48.48 0 0 1-.32-.133l-2.027-2.027a.48.48 0 0 1 0-.667l12.08-12.027a2.454 2.454 0 0 1 4.187 1.813 2.51 2.51 0 0 1-.827 1.76l-12.773 11.2a.455.455 0 0 1-.32.08zM29.087 33l1.333 1.36 12.533-10.907c.31-.27.495-.656.507-1.067s-.15-.813-.453-1.093a1.493 1.493 0 0 0-2.107 0z" class="C"/><path d="M19.247 46.734a.27.27 0 0 0 0 .32l.533 2.32a.688.688 0 0 1-.332.7.65.65 0 0 1-.762-.077l-3.653-3.52L26.42 35h3.947l2.667 2.667a60.54 60.54 0 0 1-13.787 9.067z" class="D"/><path d="M19.007 50.654c-.302-.006-.6-.13-.8-.347l-3.493-3.493a.427.427 0 0 1 0-.667L26.18 34.654a.45.45 0 0 1 .24-.133h3.973a.48.48 0 0 1 .32 0l2.667 2.667a.426.426 0 0 1 .133.373.43.43 0 0 1-.16.347l-.213.187a65.33 65.33 0 0 1-13.68 8.773l.507 2.16a1.15 1.15 0 0 1-1.093 1.413zm-3.253-4.187L18.9 49.64a.16.16 0 0 0 .213 0 .16.16 0 0 0 0-.187l-.533-2.32a.744.744 0 0 1 .4-.853 65.56 65.56 0 0 0 13.333-8.587l-2.187-2.187h-3.573zm3.84.48z" class="C"/><path d="M12.287 49.214l2.667-2.667 4.107 4.107-6.533-.453a.534.534 0 0 1-.24-.986z" class="D"/><path d="M19.14 51.054l-6.507-.453c-.386-.036-.718-.3-.854-.653s-.053-.772.214-1.054l2.667-2.667a.48.48 0 0 1 .667 0l4.08 4.08a.452.452 0 0 1 0 .533.507.507 0 0 1-.267.213zm-6.507-1.493l5.333.347-2.933-2.747z" class="C"/><path d="M30.74 35.322l-5.387.827 3.12-3.093z" class="D"/><path d="M25.353 36.654a.456.456 0 0 1-.427-.267.45.45 0 0 1 0-.533l3.093-3.12a.506.506 0 0 1 .693 0L30.98 35a.45.45 0 0 1 0 .48.47.47 0 0 1-.373.347l-5.333.827zm3.12-2.907L26.74 35.48l2.987-.453z" class="C"/><path d="M30.74 35.32l-3.76.48a.48.48 0 0 1-.453-.8l1.947-1.947z" class="D"/><path d="M26.873 36.308a.987.987 0 0 1-.853-.507.96.96 0 0 1 .16-1.147l1.947-1.947a.506.506 0 0 1 .693 0l2.267 2.267a.48.48 0 0 1-.293.827l-3.733.48zm0-.987l2.827-.347-1.253-1.253-1.6 1.6zm23.2-19.28a.4.4 0 0 0-.507-.16.37.37 0 0 0-.186.22.377.377 0 0 0 .026.287c.187.393.135.858-.133 1.2a.338.338 0 0 0-.1.253.38.38 0 0 0 .1.253.29.29 0 0 0 .213 0 .35.35 0 0 0 .347-.107 1.84 1.84 0 0 0 .24-1.947z" class="C"/></svg>'},
    {name:'Firebase',progress:60,imageSvg:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1781 2466.8" style="enable-background:new 0 0 1781 2466.8;" xml:space="preserve"> <style type="text/css">	.st0{fill:#FFA000;}	.st1{fill:#F57F17;}	.st2{fill:#FFCA28;}</style><path class="st0" d="M1169.4,891l-246.7,229.7l-229-462.1L812,392.9c29.9-53,78.8-53.7,108.7,0L1169.4,891z"/><path class="st1" d="M922.8,1120.6L0,1978.9L693.8,658.6L922.8,1120.6z"/><path class="st2" d="M1439.9,539.7c44.2-42.1,89.7-27.9,101.2,31.9L1781,1967.3L985.3,2445c-27.9,15.6-101.9,21.7-101.9,21.7	s-67.3-8.2-93.1-22.4L0,1978.9L1439.9,539.7z"/><path class="st0" d="M693.8,658.6L0,1978.9L309.2,49.1c11.6-59.8,45.5-65.9,76.1-12.9L693.8,658.6z"/></svg>'},
    {name:'Bootstrap', progress:75,imageSvg:'<svg height="1992" viewBox="0 0 512 407.864" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z" fill="#7952b3" fill-rule="evenodd"/></svg>'},
    {name:'React-Bootstrap',progress:70,imageSvg:'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2127.98 2016.87"><defs><style>.cls-1{fill:#41e0fd}</style></defs><path class="cls-1" d="M888 1119.17c16-32.62 32.84-65.37 50.17-97.35l.15-.27 18.39-35.68 27.16-45 .17-.29c10.14-17.26 20.66-34.68 31.27-51.78l18.69-30.87c24.88-41.19 44.88-71.23 76.43-114.76 17-23.43 33.12-44 58.66-75.92l.06-.06 1.26-1.59.49-.63c10.37-13.22 20.84-26.25 31.11-38.73l.34-.42.2-.25c23.83-29.51 48.12-59.13 72.19-88l9.57-11.48V356.54H1267c-9.23-8.68-18.66-17.3-28.08-25.69-76.32-67.72-152.43-120.85-226.27-157.79-75.71-37.92-145.63-57.14-207.8-57.14-44.39 0-84.06 9.94-117.91 29.53-32.55 18.84-59.9 46.91-81.31 83.44-20.06 34.23-34.84 75.89-43.95 123.81-17.54 92.37-13.74 208 11 334.34 3.12 15.9 6.56 32 10.25 48-19.74 6-38.91 12.18-57.13 18.53-119.26 41.58-219 95.91-288.42 157.14-36 31.71-63.84 65.23-82.89 99.62-20.24 36.57-30.51 74.08-30.51 111.49 0 75 41.55 151 120.15 219.94 74 64.93 178.65 121.62 302.55 164 11.51 3.91 23.22 7.71 35 11.34-4.12 17.93-7.93 36-11.36 54-23.56 124.08-26.31 237.62-8 328.35 9.51 47 24.61 87.89 44.89 121.57 21.56 35.8 48.93 63.44 81.34 82.13 34.15 19.69 74.34 29.67 119.45 29.67 61.42 0 130.09-18.21 204.11-54.13 72.56-35.21 146.63-85.64 220.13-149.89 11.33-9.9 23-20.49 34.66-31.53h17.41v-174.39l-6.34-7.8-3-3.67-79.82-98.55-44.35-54.75c-22.39-27.64-58.25-78.79-101-144-34-51.84-58.76-93.47-70.5-113.63l-1.28-2.21c-20.49-35.33-35.71-63.79-47.93-86.64-15.3-28.63-30.39-57.87-44.91-87l2.66-5.17zm-80.86-172.89c-13.53-34.7-25.92-69.13-37-102.81 34.57-7.13 70.51-13.53 107.32-19.11-12.28 20.11-24.34 40.41-36 60.64s-23.12 40.69-34.32 61.28zm-38.25 462.1c11.45-34.86 24.31-70.56 38.39-106.59 11.29 20.7 22.87 41.3 34.58 61.53 12.27 21.19 25 42.48 37.95 63.58-38.46-5.32-75.62-11.53-110.92-18.51zM707.18 397.16c9-61.74 29.14-105.87 55.37-121.06 10.89-6.31 25.34-9.5 42.93-9.5 38.47 0 88.24 15.1 143.91 43.67 60.34 31 125.77 77.11 189.22 133.45q5.9 5.24 12.07 10.89c-55.81 61.71-110.81 130.28-163.68 204.1-90.08 8.8-176.68 21.94-257.76 39.11-2.93-12.84-5.68-25.75-8.2-38.5l-.24-1.32c-19.33-98.76-24.04-189-13.62-260.84zm11.31 727c-38.1 84-70.48 167.16-96.37 247.46-9-2.8-17.89-5.72-26.65-8.7-103-35.21-188.79-80.66-248.08-131.43-45.37-38.85-72.45-79.83-72.45-109.63 0-30.59 27.09-70 74.34-108.2 55-44.47 133.27-85.11 226.19-117.5 15.79-5.48 31.87-10.73 48-15.64 25.53 79.13 57.48 160.99 95.01 243.63zm.12 474.92c2.86-15 6-30.09 9.43-45.09 80 16.37 167.59 28.71 260.75 36.71 53.38 74.34 108.84 143.37 165.05 205.44-6.94 6.39-13.94 12.68-20.9 18.79-81.37 71.13-163.09 122.55-236.28 148.71l-1.52.54c-32.8 11.58-62.09 17.45-87 17.45-18.38 0-33.22-3.18-44.11-9.46-26.51-15.29-47.14-58.46-56.6-118.45-11.06-69.91-7.19-157.97 11.17-254.65z" transform="translate(-123.98 -115.92)" id="_Group_" data-name="&lt;Group&gt;"/><path class="cls-1" d="M2195.07 1205.1q-56.26-103.45-165.54-134.23a2.85 2.85 0 0 1-1.79-2.85 3 3 0 0 1 1.37-2.68c54.24-30.16 95.93-73.11 125.15-127.9q44.15-82.89 44.16-199.49c0-128.25-32.45-223.65-97.06-287.11s-150.62-95-257.7-95h-578.35c-1.25 0-2.27 1.31-2.27 2.93V1894.3c0 1.62 1 2.93 2.27 2.93h546.57q115.42 0 199.11-33.69c55.91-22.42 101.4-52.68 137.21-90.68s61.92-83.33 78.66-136c16.74-52.23 25.1-108.8 25.1-169.24.04-105.37-19.08-192.57-56.89-262.52zm-722.32-628c0-1.62 1-2.93 2.27-2.93h339.46c56.95 0 100.51 16 130.65 47.55s45.2 86.4 45.2 164.18c0 69.18-16.74 121.92-50.25 159.08s-75.37 55.32-125.63 55.32H1475c-1.25 0-2.27-1.31-2.27-2.93zm518.16 1035.8c-34.86 42.76-84.41 64-148.07 64H1475c-1.25 0-2.27-1.31-2.27-2.93v-476.4c0-1.62 1-2.93 2.27-2.93h367.82c63.66 0 112.57 19.89 148.07 61.35s52.93 99.82 52.93 176.3c.02 77.77-17.76 138.27-52.91 180.61z" transform="translate(-123.98 -115.92)"/></svg>'}

  ];

  return (
    <div id='skills' className='progressdiv' style={{ maxHeight: `${maxHeight}px`, overflowY: 'auto' }}>
      {visibleLanguages.map((language, index) => (
        <div key={index} className="progress-bar">
          <div className="language-icon" dangerouslySetInnerHTML={{ __html: language.imageSvg }} />
          <div className='full_progress'>
            <div className="progress-indicator" style={{ width: `${language.progress}%` }}></div>
            <div className="language-label">{language.name}</div>
          </div>
        </div>
      ))}
      {languages.length > 5 && (
        <button onClick={toggleShowAll} className="see-more-button">
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
}

export default LanguageProgress;

/**
 * 获取默认的domain
 */
export function getDomainRoot() {
  let defaultDomain = 'ovopark.com';
  const host = location.hostname;

  if(host === 'localhost'){
    return host;

  }

  const hostArrays = host.split('.');

  if(hostArrays.length > 1 && isNaN(hostArrays[hostArrays.length-1])){
    return hostArrays.slice(1-hostArrays.length).join('.');
  }

  return defaultDomain;
}
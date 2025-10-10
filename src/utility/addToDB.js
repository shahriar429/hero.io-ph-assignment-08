const getInstalledApp = () => {
    const installedAppSTR = localStorage.getItem('installedApp');
    if(installedAppSTR){
        const installedAppData = JSON.parse(installedAppSTR);
        return installedAppData;
    } else {
        return [];
    }
};

const addToInstallApp = (id) => {
    const installedAppData = getInstalledApp();
    if(installedAppData.includes(id)){
        alert("App already installed");
    } else {
        installedAppData.push(id);
        const data =JSON.stringify(installedAppData);
        localStorage.setItem("installedApp" , data);
    }
};

const removeFromInstalledApp = (id) => {
    const installedAppData = getInstalledApp();
    const updatedData = installedAppData.filter(appId => parseInt(appId) !== parseInt(id)); 
    localStorage.setItem("installedApp", JSON.stringify(updatedData));
};

export {getInstalledApp, addToInstallApp, removeFromInstalledApp}
export function fValid(...params) {
  let check = false;

  params.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      const elements = document.getElementsByClassName(key);
      if (elements.length > 0) {
        elements[0].innerHTML = null;
      }
    });
  });

  params.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (!value) {
        const elements = document.getElementsByClassName(key);
        if (elements.length > 0) {
          elements[0].innerHTML = "Không được bỏ trống phần này!!";
        }
        check = true;
      }
    });
  });

  if (check) {
    return 0;
  } else {
    return 1;
  }
}
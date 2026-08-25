import React, { useEffect, useState, useRef } from "react";


const ResponsiveTable = ({ tableId }) => {
  useEffect(() => {
    const handleResize = () => {
      const table = document.getElementById(tableId);
      if (!table) return;

      const isMobile = window.innerWidth < 768;

      const headers = table.querySelectorAll('th');
      const rows = table.querySelectorAll('tbody tr');
      const thead = table.querySelector('thead');

      if (isMobile) {
        if (thead) thead.style.display = 'none';

        rows.forEach(row => {
          headers.forEach((header, index) => {
            const cell = row.cells[index];
            if (!cell) return;

            if (!cell.querySelector('.table-responsive-stack-thead')) {
              const span = document.createElement('span');
              span.className = 'table-responsive-stack-thead';
              span.textContent = header.textContent + ' ';
              cell.prepend(span);
            }
          });
        });
      } else {
        if (thead) thead.style.display = 'table-header-group';

        const spans = table.querySelectorAll('.table-responsive-stack-thead');
        spans.forEach(span => span.remove());
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tableId]);

  return null;
};

export default ResponsiveTable;
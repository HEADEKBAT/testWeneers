import { disablePageScroll, enablePageScroll } from 'scroll-lock';

// скрипт открытия и закрытия элементов
const listenOpening = (openingElements) => {
    if (!openingElements) {
        return;
    }

    openingElements.forEach((openingElement) => {
        const targeElement = document.querySelector(openingElement.dataset.open);

        if (!targeElement) {
            return;
        }

        openingElement.addEventListener('click', () => {
            targeElement.classList.add('opened');
            document.body.classList.add('fixed');
            disablePageScroll();
        });
    });
}

const listenClosing = (closingElements) => {
    if (!closingElements) {
        return;
    }

    closingElements.forEach((closingElement) => {
        const { closeDelay, closeStyles, close } = closingElement.dataset;
        const targeElement = document.querySelector(close);

        if (!targeElement) {
            return;
        }

        const removeStyle = () => {
            targeElement.removeAttribute('style');
        };

        const removeOpenedClass = () => {
            targeElement.classList.remove('opened');
            document.body.classList.remove('fixed');
        };

        const getCloseDelay = (delay) => new Promise((resolve) => setTimeout(() => {
            removeStyle();
            resolve();
        }, delay));

        closingElement.addEventListener('click', async () => {
            if (closeStyles) {
                targeElement.setAttribute('style', closeStyles);
                enablePageScroll();
            }

            if (closeDelay) {
                await getCloseDelay(closeDelay)
            } else {
                removeStyle();
            }

            removeOpenedClass();
        });
    });
}

listenOpening(document.querySelectorAll('[data-open]'));
listenClosing(document.querySelectorAll('[data-close]'));



export const handleLinkClick = (targetId: string, navigate: (path: string) => void) => {
    navigate("/");
    setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
};

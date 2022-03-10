"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const date1 = new Date(1996, 5, 6);
    const date2 = new Date(1994, 6, 7);
    const date3 = new Date(1995, 7, 8);

    await queryInterface.bulkInsert("Films", [
      {
        name: "Dracula",
        description:
          "ransylvanie, 1462. Vlad Dracul laisse la belle Elisabeta pour aller guerroyer contre l'envahisseur turc. Revenu victorieux du combat, il découvre le corps inanimé de sa femme, qui s'est suicidée à la fausse nouvelle de sa mort. Eperdu de douleur, il abjure sa foi et en appelle aux puissances du sang pour retrouver sa bien-aimée. Quatre siècles plus tard, Jonathan Harker, un jeune notaire, se rend au château du comte Dracula. Le propriétaire des lieux semble fasciné par le portrait de Mina, l'épouse de Harker, en qui il voit la réincarnation de son amour perdu.",
        date: date1,
        note: 5,
        duration: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seven",
        description:
          "Sur le point de prendre sa retraite, l'inspecteur William Somerset fait équipe avec le jeune David Mills. Tous deux mènent l'enquête sur une série de meurtres particulièrement étranges. En effet, un mystérieux serial killer, se faisant appeler John Doe, tue ses victimes selon les sept péchés capitaux.",
        date: date2,
        note: 5,
        duration: 140,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Le Seigneur des Anneaux - La Communauté de l'anneau",
        description:
          "Le jeune hobbit Frodon Sacquet hérite d'un anneau. Il s'agit de l'Anneau Unique, instrument de pouvoir absolu qui permettrait à Sauron, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples... A moins que Frodon et ses fidèles compagnons ne parviennent à emporter l'Anneau jusqu'en Mordor, lieu où il a été forgé, et à le détruire pour toujours.",
        date: date3,
        note: 5,
        duration: 201,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Films", null, {});
  },
};
